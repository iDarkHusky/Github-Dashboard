import React from "react";
import { Avatar, Chip, Paper } from "material-ui";
import { withRouter } from "react-router";
import { getItem } from "./storageHelper";

const styles = {
    chip: {
        margin: 5
    },
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center"
    },
    language: {
        fontStyle: "italic"
    }
};

class RepoInfoComponent extends React.Component {
    render() {
        const username = this.props.match.params.username;
        const reposData = getItem("reposData");
        const repo =
            reposData &&
            reposData.find(
                repo =>
                    parseInt(repo.id, 10) ===
                    parseInt(this.props.match.params.id, 10)
            );

        return (
            <div>
                <Paper style={styles.wrapper}>
                    <Chip
                        onRequestDelete={() =>
                            this.props.history.push(`/repositories/${username}`)
                        }
                        style={styles.chip}
                    >
                        <Avatar src={repo.owner.avatar_url} />
                        {repo.owner.login}
                    </Chip>
                    <a href={repo.owner.html_url}>{repo.owner.html_url}</a>
                    <h2>{repo.name}</h2>
                    <p>{repo.description}</p>
                    <p style={styles.language}>{repo.language}</p>
                </Paper>
            </div>
        );
    }
}

export const RepoInfo = withRouter(RepoInfoComponent);
