import React, { Component } from 'react';
import {BrowserRouter as Router, Route ,Link,Switch,Redirect,Prompt} from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import Home from './Home';


const Jump = (props) => {
    return <Link to={props.to}>jump</Link>
}

const X =  (props) =>{
    return(
        <button onClick={()=>{
            props.history.push('/');
        }}>click</button>
    )
}
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
          bool:true,
        }
    }
    render(){
        return(
            <div>
                <h4>xxxxxxxxxx</h4>
                <Router>
                    <div>
                        <Link to="/a/A">跳转A</Link>
                        ----
                        <Link to="/b">跳转B</Link>
                        ----
                        <Link to="/">首页</Link>
                        <br></br>
                        <Link to="/render">render</Link>
                        ----
                        <Jump to="/b"></Jump>
                        <br></br>
                        <Link to="/x">编程式导航</Link>
                        {/*<Switch>*/}
                        <Route path="/a/:id" component={PageA}></Route>
                        <Route path="/b" component={PageB}></Route>
                        <Route path="/render" render={() => {
                            return (
                                <Redirect to="/b"/>
                            )
                        }}></Route>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/x" component={X}></Route>
                        <Prompt when={this.state.bool} message="是否留在当前页面"></Prompt>

                        {/*</Switch>*/}
                    </div>
                </Router>
            </div>
        );
    }
}

export default Main;