import React, { Component } from 'react'
// import './../asset/css/reset.css'

export default class DImg extends Component {
	constructor(props) {
		super(props);
	}
	
  render() {
    return (
		<div>
			<img src={ this.props.row.img}></img>
			<h5>{this.props.row.product_name}</h5>
		</div>
    )
  }
}
