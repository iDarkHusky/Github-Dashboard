import React from "react";
import { AppBar, Drawer } from "material-ui";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SearchUser } from "./SearchUser";
import { Repositories } from "./Repositories";
import { RepoInfo } from "./RepoInfo";

const styles = {
    wrapper: {
        fontFamily: "sans-serif",
        textAlign: "center"
    },
    a: {
        marginTop: "20px",
        display: "inline-block"
    }
};

class App extends React.Component {
    state = {
        open: false
    };

    render() {
        return (
            <div style={styles.wrapper}>
                <AppBar
                    title="Github Dashboard"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={() =>
                        this.setState(prevState => ({
                            open: !prevState.open
                        }))
                    }
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({ open })}
                >
                    <a href={"/"} style={styles.a}>
                        Search User
                    </a>
                </Drawer>
                <Router>
                    <div>
                        <Route exact path={"/"} component={SearchUser} />
                        <Route
                            exact
                            path={"/repositories/:username"}
                            component={Repositories}
                        />
                        <Route
                            exact
                            path={"/repositories/:username/:id"}
                            component={RepoInfo}
                        />
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;
