import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import CharacterCard from './CharacterCard.jsx';

const Characters = () => {

  const [charList, setCharacters] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/api/characterInfo');
        const data = await response.json();
        // console.log('data!', data);
        if (!response.ok) {
          setCharacters()
          throw new Error('Failed to connect to DB')
        }
        setCharacters(data);
      } catch (error) {
        console.error('Problem getting character data', error);
      }
    }
    getData();
  }, []); 

  if (!charList) return <div>Sorry, no characters found</div>;
  if (!charList[0]) return <div>Loading characters, please wait~</div>
  console.log("charList is as follows:", charList)
  const charElems = charList.map((char, i) => {
    return <CharacterCard key={i} char={char} />;
  });

  return <div>{charElems}</div>;
};

export default Characters;
