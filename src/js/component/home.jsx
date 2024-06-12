import React from "react";

import Clock from "./clock"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [counter, setCounter] = React.useState(0)
	
	React.useEffect(() => {
		let interval = null;
		  interval = setInterval(() => {
			setCounter(counter => counter + 1);
		  }, 1000);
	   
		return () => clearInterval(interval);
	  }, [counter]);
	
	return (
		<Clock counter = {counter} />
	);
};

export default Home;
