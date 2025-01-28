const db = require('../models/dmOnlyModel.js');
// const fl = require('.../client/characters')
const fs = require('fs')

const dmOnlyController = {};

dmOnlyController.getCharacters = async (req, res, next) => {
    console.log('Made it to getCharacters!')
  try {
    const sql = 'SELECT * FROM "Chars";';
    const dbVal = await db.query(sql);
    // console.log('Made it to dbVal!', dbVal)
    res.locals.characters = dbVal.rows;
    return next()
  } catch (err) {
    return next({ message: 'Error - SOMEThing is wROng.', err: err });
  }
};

// dmOnlyController.updateCharacter = async (req, res, next) => {
//   console.log('Made it to updateCharacter!')
//   try {
//     const targetStr = req.body[0]
//     const sql = `UPDATE characters SET ${targetStr.match(/[a-z]+$/)} = ${targetStr[targetStr.search(/[A-Za-z]+\s?[A-Za-z]+/)+2]} WHERE name = ${req.params.name}`
//   }
// } 

// dmOnlyController.characterPage = (req, res, next) => {
//   let path = '/Users/alexgrimm/Desktop/skill-builders/solo/client/characters.html'
//     const file = fs.readFileSync(path)
//     res.locals.characterFile = file
//     next()
// } 

module.exports = dmOnlyController