import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'

// 组件
import App from "./app";
import Main from "./main";

// 子菜单界面待配置
import Content from './main/content'
import NoMatch from './noMatch'
// import  from './main/form'
// import  from './main/table'
// import  from './main/'
// import  from './main/'
// import  from './main/'
// import  from './main/'
// import  from './main/'
// import  from './main/'
// import  from './main/'
// import  from './main/'
// import  from './main/'
// import  from './main/'

export default class Router extends React.Component {
    render() {
        return (<HashRouter>
            <App>
                {/*<Route path='/login' component={Login}/>*/}
                {/*<Route path='/other' component={Other}/>*/}
                <Route path='/main' render={() =>
                    <Main>
                        <Switch>
                            <Route path="/main/content" component={Content}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Main>
                }/>
            </App>
        </HashRouter>)
    }
}