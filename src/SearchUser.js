import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { Paper, TextField, RaisedButton } from "material-ui";

class SearchUserComponent extends React.Component {
    state = {
        username: ""
    };

    handleChange = ({ target: { value } }) => {
        this.setState({ username: value });
    };

    handleKeyPress = ev => {
        const username = this.state.username;

        if (ev.key === "Enter" && username !== "") {
            ev.preventDefault();
            this.props.history.push(`/repositories/${username}`);
        }
    };

    handleClick = ev => {
        const username = this.state.username;
        if (username !== "") {
            ev.preventDefault();
            this.props.history.push(`/repositories/${username}`);
        }
    };

    render() {
        const username = this.state.username;

        return (
            <Fragment>
                <Paper>
                    <TextField
                        hintText="Username"
                        value={username}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <RaisedButton
                        label="Search"
                        primary={true}
                        onClick={this.handleClick}
                    />
                </Paper>
            </Fragment>
        );
    }
}

export const SearchUser = withRouter(SearchUserComponent);
