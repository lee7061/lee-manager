import React, {Component} from 'react';
// 全局的style
import './App.css';

// component
import Main from './../main'

export default class App extends Component {
    render() {
        return (
            <Main className="App">
                {this.props.children}
            </Main>
        );
    }
}
