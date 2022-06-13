import React, { useState, useEffect } from 'react';

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

import CharacterCard from '../CharacterCard/CharacterCard';
import Spinner from '../Spinner/Spinner';

const CharacterList = () => {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios('https://breakingbadapi.com/api/characters').then((res) =>
			setCharacters(res.data)
		);
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='CharacterList-container'>
					{characters.map((char) => {
						return (
							<div key={char.char_id}>
								<Link
									to={`/detail/${char.char_id}`}
									style={{ textDecoration: 'none' }}
								>
									<CharacterCard data={char} />
								</Link>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default CharacterList;
