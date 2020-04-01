import React, { useState } from 'react';


const NavBurger = () => {
	const [isActive, setIsActive ] = useState(false);

	return (
		<a role="button" className={ "navbar-burger burger is-marginless" + isActive ? " is-active" : "" }
			aria-label="menu" aria-expanded="false" data-target="navbarMenu"
			onClick={() => {
				document.getElementById(this.target).classList.toggle('is-active');
				setIsActive(!isActive);
			}}>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	);
};

export default NavBurger;