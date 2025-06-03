import React from "react";
import Header from '../components/Header.jsx';
import config from "../config.js";

class Galleri extends React.Component {
	render() {
		return (
			<div className="Galleri">
				<Header />
			<div className="container">
				

				<div className="galleri-grid">

					<img src={`${config.assetPath}../assets/bild2.png`} alt="Bild på sushi" />

					<img src={`${config.assetPath}../assets/bild1.png`} alt="Bild på sushi" />

					<video controls autoPlay loop>
						<source src={`${config.assetPath}../assets/sushifilm.mp4`} type="video/mp4" />
						Videon kan inte spelas upp.
					</video>

					<img src={`${config.assetPath}../assets/bild3.png`} alt="Bild på sushi" />

				</div>
			</div>
			</div>
		)
	}
}

export default Galleri;