import React from "react";
import { AppBar } from "material-ui";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SearchUser } from "./SearchUser";
import { Repositories } from "./Repositories";
import { RepoInfo } from "./RepoInfo";

const styles = {
    wrapper: {
        fontFamily: "sans-serif",
        textAlign: "center"
    }
};

class App extends React.Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <AppBar
                    title="Github Dashboard"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
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
