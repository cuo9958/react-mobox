import React from 'react';
import './App.css';
import { DatePicker } from 'antd';
import { observable, computed, action, trace } from 'mobx';
import { Provider, inject } from 'mobx-react';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

class test {

    @observable test = 1;

    @computed
    get test1() {
        return 1 + this.test;
    }

    @action
    test2() {
        trace()
        this.test = 2;
    }
}

const tt = new test();

export default App;
