import React from "react";
import ReactDOM from "react-dom";
import { lightBlue700, lightBlue500 } from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import App from "./App";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: lightBlue500,
        primary2Color: lightBlue700
    },
    appBar: {
        height: 50
    }
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById("root")
);
