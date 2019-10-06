import React, { Component } from "react"
import InputForm from "react-input-form";

import "../styles/list.css"

export default class List extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return(
				<div className="list-container">
					{
						this.props.lists.map(list => (
								<div className="list" key={list.id}>
									{list.name}
								</div>
						))
					}
				</div>
		)
	}
}
