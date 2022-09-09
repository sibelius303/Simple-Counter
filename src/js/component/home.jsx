import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import CounterCard from "./counterCard.jsx";
import CounterIcono from "./counterIcono.jsx"

//create your first component
const Home = () => {
	return (
		<div className="contenedor">
			<CounterIcono/>
			<CounterCard/>
			<CounterCard/>
			<CounterCard/>
			<CounterCard/>
			<CounterCard/>
			<CounterCard/>
		</div>
	);
};

export default Home;
