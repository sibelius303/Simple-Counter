import React from "react";
import propTypes from "prop-types";
//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="contenedor">
			<div className="cardCounter"><i class="fa-regular fa-clock"></i></div>
			<div className="cardCounter">{props.digiFive %10}</div>
			<div className="cardCounter">{props.digiFour %10}</div>
			<div className="cardCounter">{props.digiThree %10}</div>
			<div className="cardCounter">{props.digiTwo %10}</div>
			<div className="cardCounter">{props.digiOne %10}</div>
		</div>
	);
};

export default Home;
