import React from "react";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="contenedor">
			<div className="cardCounter"><i class="fa-regular fa-clock"></i></div>
			<div className="cardCounter">0</div>
			<div className="cardCounter">0</div>
			<div className="cardCounter">0</div>
			<div className="cardCounter">0</div>
			<div className="cardCounter">0</div>
		</div>
	);
};

export default Home;
