import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './CharacterDetail.css';

import CharacterCard from '../../components/CharacterCard/CharacterCard';

const CharacterDetail = () => {
	let { id } = useParams();

	console.log('USE PARAMS:', id);

	const [character, setCharacter] = useState([]);

	useEffect(() => {
		axios(`https://breakingbadapi.com/api/characters/${id}`).then((res) =>
			setCharacter(res.data)
		);
	}, [id]);

	return (
		<div className='CharacterList-detail'>
			{character.map((char) => {
				return (
					<div key={char.char_id}>
						<CharacterCard data={char} />
					</div>
				);
			})}
		</div>
	);
};

export default CharacterDetail;
