import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => (
	<div className="container">
		<Helmet />
		<header>
			<Navbar />
		</header>
		<body className="has-navbar-fixed-top">
			<section className="section">
				{children}
			</section>
		</body>
		<Footer />
	</div>
);

export default Layout;
