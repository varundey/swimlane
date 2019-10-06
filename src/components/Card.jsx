import React, { Component } from "react";

export default class Card extends Component {
	render() {
		return (
				<div className="card-container">
					{this.props.cards.map(card => (
							<div className="card" id={card.id} key={card.id}>
								{card.name}
							</div>
					))}
				</div>
		)
	}
}
