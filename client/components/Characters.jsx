import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard.jsx';
import { Grid } from '@mui/material';

// let sample = '';
const Characters = () => {
  const [charList, setCharacters] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/api/characterInfo');
        const data = await response.json();
        // console.log('data!', data);
        if (!response.ok) {
          setCharacters();
          throw new Error('Failed to connect to DB');
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
  if (!charList[0]) return <div>Loading characters, please wait~</div>;
  console.log('charList is as follows:', charList);
  const charElems = charList.map((char, i) => {
    return (
      <Grid item key={i}>
        <CharacterCard char={char} />
      </Grid>
    );
  });

  return (
    <Grid container alignItems='flex-start' spacing={2} direction='column'>
      {charElems}
    </Grid>
  );
};

export default Characters;
