import React from "react";

class Third extends React.Component {
	state = {
		meal: "",
		data: new Date(),
	};

	componentDidMount() {
        console.log('Start komponentu')
		this.setState({ meal: this.props.meal });
		this.inter = setInterval(() => {
			this.setState({ data: new Date() });
		});
	}

	componentWillUnmount() {
        console.log('Zakończenie komponentu')
		clearInterval(this.inter);
	}

	changeNext = (evt) => {
		this.setState({ meal: evt.target.value });
	};

	render() {
		return (
			<div>
				<div>Dzisiaj będę jadł taki posiłek: {this.state.meal}</div>
				<input type="text" onChange={this.changeNext}></input>
				<div>Dzisiejsza data: {this.state.data.toString().split("T")[0]}</div>
			</div>
		);
	}
}

export default Third;
