import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacterDetail = async () => {
            const PUBLIC_KEY = 'c7a8cfddc24b8ccbd0b5edb811abd9c0';
            const HASH = 'e379863a20df8f0df8603b77ba0c1d01';
            const URL = `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

            try {
                const response = await axios.get(URL);
                setCharacter(response.data.data.results[0]);
            } catch (error) {
                console.error('Error fetching character detail:', error);
            }
        };

        fetchCharacterDetail();
    }, [id]);

    if (!character) {
        return <div>Loading character details...</div>;
    }

    return (
        <div className="character-detail">
            <h2>{character.name}</h2>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            <p>{character.description || 'No description available.'}</p>
            <h3>Comics:</h3>
            <ul>
                {character.comics.items.map((comic, index) => (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetails;
