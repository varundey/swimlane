import React, { Component } from "react"
import ReactDOM from "react-dom"

import List from "./components/List.jsx";

class Board extends Component {

	render() {
		return (
				<List/>
		)
	}
}

ReactDOM.render(
		<Board/>,
		document.getElementById("react-template-container")
);
