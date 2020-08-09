import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import PhotoCarousel from './photoCarousel';

const Layout = ({ children }) => (
	<>
		<Helmet />
		<section className="hero is-medium">
			<div className="hero-head">
				<Navbar />
			</div>
			<PhotoCarousel name="Primary" className="hero-body" />
		</section>
		<section className="section">
			{children}
		</section>
		<Footer />
	</>
);

export default Layout;
