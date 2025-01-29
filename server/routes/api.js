const express = require('express');

const charController = require('../controllers/charController');

const router = express.Router();

console.log('Made it to API!');

let charPage =
  '/Users/alexgrimm/Desktop/skill-builders/solo/client/characters.html';

router.get('/characters', (req, res) => {
  return res.status(200).sendFile(charPage);
}); //Link to Broken HTML, maybe abandon

router.get('/characterInfo', charController.getCharacters, (req, res) => {
  return res.status(200).json(res.locals.characters);
}); // Fetches DB info for Frontend

router.post('/characterInfo', charController.updateCharacter, (req, res) => {
  // console.log('Req here!', req)
  // console.log('Body Here!', req.body);
  return res.status(200).sendFile(res.locals.updatedChar);
});

module.exports = router;
