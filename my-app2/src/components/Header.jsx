import React from "react";
import '../App.css';
import { Link, NavLink } from "react-router";

// Bilder importeras
import Group18 from '../assets/Group18.png'; 

class Header extends React.Component {
	render() {
		return (
			<div className="menyheader">
				<nav>
					<div className="headermeny">
						<div className="logga">
							<Link to="/"><img src={Group18} alt="Restaurangens logga" /></Link>
						</div>
						<div className="menyval">
							<ul>
								<li><NavLink to="/">Hem</NavLink></li>
								<li><NavLink to="/meny">Meny</NavLink></li>
								<li><NavLink to="/dagenslunch">Dagens lunch</NavLink></li>
								<li><NavLink to="/galleri">Galleri</NavLink></li>
								<li><NavLink to="/omoss">Om oss</NavLink></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>

		)
	}
}
export default Header;