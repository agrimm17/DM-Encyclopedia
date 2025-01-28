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
        setCharacters(data);
      } catch (error) {
        console.log('problem getting data', error);
      }
    }
    getData();
  }, []); 

  if (!charList) return <div>Sorry, no characters found</div>;
  // console.log("charList is as follows:", charList)
  const charElems = charList.map((char, i) => {
    return <CharacterCard key={i} char={char} />;
  });

  return <div>{charElems}</div>;
};

export default Characters;
