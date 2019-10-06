import React, { Component } from "react"
import InputForm from "react-input-form";

import "../styles/list.css"
import Card from "./Card.jsx";

export default class List extends Component {
	constructor(props){
		super(props);
		this.state = {
			cards: []
		};
		this._addCard = this._addCard.bind(this);
	}

	_addCard() {
		this.setState({
			cards: [...this.state.cards, {
				id: event.timeStamp,
				name: event.target.value
			}]
		});
	}

	render() {
		return(
				<div className="list-container">
					{
						this.props.lists.map(list => (
								<div className="list" id={list.id} key={list.id}>
									{list.name}
									<Card cards={this.state.cards}/>
									<InputForm text="Add Card" onSave={this._addCard}/>
								</div>
						))
					}
				</div>
		)
	}
}
