import React, { Component } from "react"

const AddListButton = (props) => (
		<button onClick={props.toggleUserCreatingList}>
			Add List
		</button>
);

class AddListInputForm extends Component {
	constructor(props) {
		super(props);
		this.handleListInputChange = this.handleListInputChange.bind(this);
		this.handleEnterButtonPressed = this.handleEnterButtonPressed.bind(this);

		this.state = {
			listName: ""
		}
	}


	handleListInputChange() {
		this.setState({listName: event.target.value})
	}

	handleEnterButtonPressed() {
		if(event.key === "Enter"){
			this.props.saveList()
		}
	}

	render() {
		return (
				<input value={this.state.listName} onChange={this.handleListInputChange}
							 onBlur={this.props.saveList} onKeyDown={this.handleEnterButtonPressed}/>
		)
	}
}

export default class List extends Component {
	constructor(props) {
		super(props);
		this.handleAddListClick = this.handleAddListClick.bind(this);
		this.saveList = this.saveList.bind(this);

		this.state = {
			isUserCreatingList: false,
			lists: []
		}
	}

	handleAddListClick() {
		this.setState({isUserCreatingList: true})
	}

	saveList() {
		this.setState({isUserCreatingList: false});
		this.setState(state => {
			if( event.target.value !== "")
				state.lists.push(event.target.value)
		});
	}

	render() {
		return (
				<div>
					{
						this.state.lists.map(list =>
								<div draggable key={list}>
									{list}
								</div>)
					}
					{
						this.state.isUserCreatingList ?
								<AddListInputForm saveList={this.saveList}/> :
								<AddListButton toggleUserCreatingList={this.handleAddListClick}/>
					}
				</div>
		)
	}
}
