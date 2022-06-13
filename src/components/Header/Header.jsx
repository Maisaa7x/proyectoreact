import React from 'react';
import './Header.css';
import img from './header.jpeg';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='Header'>
			<Link to='/'>
				<img src={img} alt='Breaking Bad Logo' />
			</Link>
		</div>
	);
};

export default Header;
