import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from "./demo";

import {Store} from "./store";
import {Actions} from "./actions";
import {Provider} from "mobx-react";

const store = new Store();

const actions = new Actions({store});

class App extends Component {
    render() {
        return (
            <Provider store={store} actions={actions}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Demo/>
                </div>
            </Provider>
        );
    }
}

export default App;
