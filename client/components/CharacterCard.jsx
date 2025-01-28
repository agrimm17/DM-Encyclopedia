import React, {useEffect, useState} from 'react';

const CharacterCard = ({ char, onClick }) => {
  // const { charname, race, classes/*This cant be class for some reason?*/, level, playername } = char;
  // const SQL = `UPDATE characters SET {column} = {} WHERE name = ${name}`;
  // const server =
  //   '/Users/alexgrimm/Desktop/skill-builders/solo/server/server.js';

  const [charInfo, setCharInfo] = useState({charname: char.charname, race: char.race, classes: char.classes, level: char.level, playername: char.playername})
  const { charname, race, classes, level, playername } = charInfo
  // console.log(race)

  
  
  return (
    <div>
      {/* <button onClick=''>Edit Character</button> */}
      <ul>
        <li>Name: {charname}</li>
        <li>
          Level {level} {race} {classes}
        </li>
        <li>Player: {playername}</li>
      </ul>
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
