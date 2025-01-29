import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import CharacterCard from './CharacterCard.jsx';
let sample = ""
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
  // return <div>"Test"</div>
  if (!charList) return <div>Sorry, no characters found</div>;
  if (!charList[0]) return <div>Loading characters, please wait~</div>
  console.log("charList is as follows:", charList)
  const charElems = charList.map((char, i) => {
    return <CharacterCard key={i} char={char} />;
  });

  return <div><div>{sample}</div>{charElems}</div>;
};

export default Characters;
