const db = require('../models/dmOnlyModel.js');
// const fl = require('.../client/characters')
const fs = require('fs')

const charController = {};

charController.getCharacters = async (req, res, next) => {
    console.log('Made it to getCharacters!')
  try {
    const sql = 'SELECT * FROM "Chars" ORDER BY id ASC;';
    const dbVal = await db.query(sql);
    // console.log('Made it to dbVal!', dbVal)
    res.locals.characters = dbVal.rows;
    return next()
  } catch (err) {
    return next({ message: 'Error in getCharacters middleware:', err: err });
  }
};

charController.updateCharacter = async (req, res, next) => {
  console.log('Made it to updateCharacter!')
  try {
    console.log(req.body)
    const {id, charname, classes, race, playername, level} = req.body
    const sql = `UPDATE "Chars" SET charname = '${charname}', classes = '${classes}', race = '${race}', playername = '${playername}', level = ${level} WHERE id = '${id}';`
    const dbVal = await db.query(sql)
    res.locals.updatedChar = dbVal
    return next()
    // const targetStr = req.body[0]
    // const sql = `UPDATE characters SET ${targetStr.match(/[a-z]+$/)} = ${targetStr[targetStr.search(/[A-Za-z]+\s?[A-Za-z]+/)+2]} WHERE id = ${req.params.id}`
  } catch (err) {
    return next({ message: 'Error in updateCharacter middleware:', err: err})
  }
} 

// dmOnlyController.characterPage = (req, res, next) => {
//   let path = '/Users/alexgrimm/Desktop/skill-builders/solo/client/characters.html'
//     const file = fs.readFileSync(path)
//     res.locals.characterFile = file
//     next()
// } 

module.exports = charController