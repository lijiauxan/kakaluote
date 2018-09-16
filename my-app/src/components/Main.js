import React, { Component } from 'react';
import {BrowserRouter as Router, Route ,Link,Switch} from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import Home from './Home';

class Main extends Component{
    render(){
        return(
            <div>
                <h4>xxxxxxxxxx</h4>
                <Router>
                    <div>
                        <Link to="/a/A">跳转A</Link>
                        ----
                        <Link to="/b/B">跳转B</Link>
                        ----
                        <Link to="/">首页</Link>
                        {/*<Route exact path="/" component={Home}></Route>*/}
                        <Switch>
                            <Route path="/a/:id" component={PageA}></Route>
                            <Route path="/b/:id" component={PageB}></Route>
                            <Route path="/" component={Home}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Main;