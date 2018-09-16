import React, { Component } from 'react';

class PageA extends Component{
    render(){
        return(
            <div>
                我是
                {this.props.match.params.id}
            </div>
        )
    }
}

export default PageA;