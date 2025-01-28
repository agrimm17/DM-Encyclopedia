const express = require('express');
const app = express();
const path = require('path');

const apiRouter = require('./routes/api');

// app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(express.json());

app.use('/api', apiRouter);
// Remind me why this is necesary? 

// app.get('/api/test', (req, res) => {
//   return res
//     .status(200)
//     .sendFile(path.join(__dirname, '../client/characters.html'));
// });

app.use((req, res) =>
  res.status(404).send('Wrong way, head back to town, adventurer.')
);


// Investigate this to be sure it's working properly!
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error. Who knows why' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);
