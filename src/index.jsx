import React, { Component } from "react"
import ReactDOM from "react-dom"

export default class App extends Component {
	render() {
		return (
				<div>
					Hello, World!
				</div>
		)
	}
}

ReactDOM.render(
		<App/>,
		document.getElementById("react-template-container")
);
