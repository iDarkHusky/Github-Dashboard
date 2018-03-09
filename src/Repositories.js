import React from "react";
import {
    Avatar,
    Chip,
    CircularProgress,
    List,
    ListItem,
    Paper
} from "material-ui";
import { blue500 } from "material-ui/styles/colors";
import FileFolder from "material-ui/svg-icons/file/folder";
import { withRouter } from "react-router";
import { saveItem } from "./storageHelper";
import { TOKEN } from "./values/TOKEN";

const styles = {
    chip: {
        margin: 5
    },
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "left"
    }
};

class RepositoriesComponent extends React.Component {
    state = {
        userData: [],
        reposData: []
    };

    async componentDidMount() {
        const username = this.props.match.params.username;
        try {
            const user = await fetch(
                `https://api.github.com/users/${username}`
            );
            const userData = await user.json();

            const repos = await fetch(
                `https://api.github.com/users/${username}/repos?access_token=${TOKEN}`
            );
            const reposData = await repos.json();

            this.setState({ userData, reposData }, () =>
                saveItem("reposData", reposData)
            );
        } catch (err) {
            console.log(err);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { reposData } = this.state;
        if (prevState.reposData !== reposData) {
            saveItem("repos", reposData);
        }
    }

    render() {
        const { userData, reposData } = this.state;
        const username = this.props.match.params.username;

        return (
            <div>
                <Paper style={styles.wrapper}>
                    <Chip
                        onRequestDelete={() => {
                            this.props.history.push("/");
                        }}
                        style={styles.chip}
                    >
                        <Avatar src={userData.avatar_url} />
                        {userData.login}
                    </Chip>
                    <List>
                        {reposData.length ? (
                            reposData.map(repo => (
                                <ListItem
                                    key={repo.id}
                                    primaryText={repo.name}
                                    leftIcon={
                                        <FileFolder hoverColor={blue500} />
                                    }
                                    onClick={() => {
                                        this.props.history.push(
                                            `/repositories/${username}/${
                                                repo.id
                                            }`
                                        );
                                    }}
                                />
                            ))
                        ) : (
                            <CircularProgress size={80} thickness={5} />
                        )}
                    </List>
                </Paper>
            </div>
        );
    }
}

export const Repositories = withRouter(RepositoriesComponent);
