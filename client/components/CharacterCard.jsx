import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CharacterCard = ({ char, onClick }) => {
  // const { charname, race, classes/*This cant be class for some reason?*/, level, playername } = char;
  // const SQL = `UPDATE characters SET {column} = {} WHERE name = ${name}`;
  // const server =
  //   '/Users/alexgrimm/Desktop/skill-builders/solo/server/server.js';

  const [charInfo, setCharInfo] = useState({
    id: char.id,
    charname: char.charname,
    race: char.race,
    classes: char.classes,
    level: char.level,
    playername: char.playername,
  });
  const { charname, race, classes, level, playername } = charInfo;
  // console.log(race)

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    if (isEditing) {
      async function updateChar(update) {
        try {
          const response = await fetch('/api/characterInfo', {
            method: 'Post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),
          });
          const data = await response.json();
          if (!response.ok) {
            throw new Error('Bad Response from DB');
          }
        } catch (error) {
          console.error('Problem updating character', error);
        }
      }
      updateChar(charInfo);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <Card sx={{ width: 400, mx: 'auto' }}>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              <input
                type='text'
                value={charInfo.charname}
                onChange={(e) =>
                  setCharInfo((prevCharInfo) => ({
                    ...prevCharInfo,
                    charname: e.target.value,
                  }))
                }
              ></input>
              <br />
              (Level:{' '}
              <input
                type='text'
                value={charInfo.level}
                onChange={(e) =>
                  setCharInfo((prevCharInfo) => ({
                    ...prevCharInfo,
                    level: e.target.value,
                  }))
                }
              ></input>
              <br />
              Race:{' '}
              <input
                type='text'
                value={charInfo.race}
                onChange={(e) =>
                  setCharInfo((prevCharInfo) => ({
                    ...prevCharInfo,
                    race: e.target.value,
                  }))
                }
              ></input>
              <br />
              Class:{' '}
              <input
                type='text'
                value={charInfo.classes}
                onChange={(e) =>
                  setCharInfo((prevCharInfo) => ({
                    ...prevCharInfo,
                    classes: e.target.value,
                  }))
                }
              ></input>
              )
              <br />
              Player:{' '}
              <input
                type='text'
                value={charInfo.playername}
                onChange={(e) =>
                  setCharInfo((prevCharInfo) => ({
                    ...prevCharInfo,
                    playername: e.target.value,
                  }))
                }
              ></input>
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {char.description}
            </Typography>
            <button onClick={handleEdit}>Save Character</button>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ width: 400, mx: 'auto' }}>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              {charname} (Level {level} {race} {classes})
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {char.description}
            </Typography>
            <button onClick={handleEdit}>Edit Character</button>
          </CardContent>
        </Card>

        // <ul>
        //   <button onClick={handleEdit}>Edit Character</button>
        //   <li>Name: {charname}</li>
        //   <li>
        //     Level {level} {race} {classes}
        //   </li>
        //   <li>Player: {playername}</li>
        // </ul>
      )}
      {/* <form action='/api/update' method='post'> */}
      {/* SQL: UPDATE characters SET {column} = {} WHERE name = {name} 
        fetch PATCH(SQL)*/}
      {/* <label for='updateForm'>Update Character:</label> */}
      {/* <input type='text' id='cname' name='cname' /> */}
      {/* <button type='submit'>Submit Changes</button> */}
      {/* </form> */}
    </div>
  );
};

export default CharacterCard;
