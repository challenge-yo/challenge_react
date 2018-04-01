import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(

<HashRouter>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
</HashRouter>


, document.getElementById('root'));
