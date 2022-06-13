import React from 'react';
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
