const express = require('express');
const lesson1Controller = require('./controllers/lesson1');
const app = express();

 
app.get('/', lesson1Controller.testRoute);
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});