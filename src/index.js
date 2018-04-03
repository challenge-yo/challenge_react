import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import {indigo500, indigo700} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#212121',
        primary2Color: indigo700,
        accent1Color: '#039be5',
        pickerHeaderColor: indigo500,
        canvasColor: "#212121",
        textColor: "rgba(255, 255, 255, 0.87)"
    },
    bottomNavigation: {
        selectedColor: "#039be5",
        unselectedColor: "#ffffff"
    },
    snackbar: {
        backgroundColor: "#039be5",
        textColor: "rgba(255, 255, 255, 0.87)"
    }
})


ReactDOM.render(

<HashRouter>
    <MuiThemeProvider muiTheme={muiTheme}>
        <App />
    </MuiThemeProvider>
</HashRouter>


, document.getElementById('root'));
