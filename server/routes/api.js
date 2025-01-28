const express = require('express');

const dmOnlyController = require('../controllers/charController');

const router = express.Router();

console.log('Made it to API!');

let charPage =
  '/Users/alexgrimm/Desktop/skill-builders/solo/client/characters.html';

router.get('/characters', (req, res) => {
  return res.status(200).sendFile(charPage);
}); //Link to Broken HTML, maybe abandon

router.get('/characterInfo', dmOnlyController.getCharacters, (req, res) => {
  return res.status(200).json(res.locals.characters);
}); // Fetches DB info for Frontend

router.post('/update', (req, res) => {
  // console.log('Req here!', req)
  // console.log('Body Here!', req.body);
  res.locals.req = req.body;
  return res.status(200).sendFile(charPage);
});

module.exports = router;
