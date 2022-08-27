import React from "react";

class Second extends React.Component {
	state = {
		place: "Zakopane",
	};

	clickFunction(evt) {
		console.log(`Klikamy`, evt);
	}

	inputFunction(evt) {
		console.log(evt.target.value);
	}

	changestate = (evt) => {
		this.setState({ place: "Gdańsk" });
	}

	render() {
		return (
			<div>
				<h2> To nasz Drugi komponent</h2>
				<div>
					{this.props.imie} uwielbia {this.props.sports}
				</div>
				<div onClick={this.clickFunction}>
					Dzisiaj jedzie do {this.state.place}
				</div>
				<input type="text" onChange={this.inputFunction}></input>
                <div onClick={this.changestate}>Zmień miasto! Kliknij</div>
			</div>
		);
	}
}

export default Second;
