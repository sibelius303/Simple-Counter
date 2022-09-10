//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


Home.propTypes = {
    digiFive: propTypes.number,
    digiFour: propTypes.number,
    digiThree: propTypes.number,
    digiTwo: propTypes.number,
    digiOne: propTypes.number,
}
let counter = 0;

setInterval(function (){
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;
    //render your react application
    ReactDOM.render(<Home digiOne={one} digiTwo={two} digiThree={three} digiFour={four} digiFive={five}/>,
     document.querySelector("#app")
    );
},1000)


