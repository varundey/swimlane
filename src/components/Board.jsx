import React, { Component } from "react"
import InputForm from "react-input-form"

import List from "./List.jsx"
import "../styles/board.css"

export default class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: []
		};
		this._addList = this._addList.bind(this);
	}

	_addList() {
		this.setState({
			lists: [...this.state.lists, {
				id: event.timeStamp,
				name: event.target.value
			}]
		})
	}

	render() {
		return (
				<div className="board-container">
					{
						this.state.lists.map(list => (
								<div className="list" id={list.id} key={list.id}>
									<List listName={list.name}/>
								</div>
						))
					}
					<InputForm text="Add List" onSave={this._addList}/>
				</div>
		)
	}
}
