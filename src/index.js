// web/src/index.js

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'  // Add this line
import { HashRouter } from "react-router-dom"
import App from "./app.js"

import store from "./store"  // Add this line

const Root = () => <Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>

ReactDOM.render(<Root />, document.getElementById("root"))