import React from 'react';
// 全局的style
import './style/index.scss';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}
