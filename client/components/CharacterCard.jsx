import React from 'react';

const CharacterCard = ({ char, onClick }) => {
  const { charname, race, classes/*This cant be class for some reason?*/, level, playername } = char;
  // const SQL = `UPDATE characters SET {column} = {} WHERE name = ${name}`;
  // const server =
  //   '/Users/alexgrimm/Desktop/skill-builders/solo/server/server.js';


  return (
    <div>
      <ul>
        <li>Name: {charname}</li>
        <li>
          Level {level} {race} {classes}
        </li>
        <li>Player: {playername}</li>
      </ul>
      <form action='/api/update' method='post'>
        {/* SQL: UPDATE characters SET {column} = {} WHERE name = {name} 
        fetch PATCH(SQL)*/}
        {/* <label for='updateForm'>Update Character:</label> */}
        <input type='text' id='cname' name='cname' />
        <button type='submit'>Submit Changes</button>
      </form>
    </div>
  );
};

export default CharacterCard;
