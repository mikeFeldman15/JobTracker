//** Express server imports **//
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

//** Additional imports **//
const path = require('path');

//** Require in Routers **//


//** Serve all compiled files when running the production build **//
app.use(express.static(path.resolve(__dirname, '../client')));
app.use('/build', express.static(path.join(__dirname, '../build')));

//** Automatically parse urlencoded body content from incoming requests and place it in req.body **//
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());


//** Route handler to serve the basic file in case of no webpack build **//
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html')); 
}); 

//** Routers **//


//** Middleware to serve the main html file **//
const serveMainFile = (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
}

//** Routes requiring main file for React Router Routes**//
app.get('/', serveMainFile);

//** No route / 404 Handler **//
app.use('*', (req, res) => res.status(404).send('Error 404: This page doesn\'t exist!'));

//** Global Error Handler **//

app.use((err, req, res, next) => {
  //** Sample Error in middleware **//
  /*
  return next({
    error: err, //if not error but want to return an error then write your own error message
    status: 404,
    message: 'Your message to describe what went wrong',
    location: 'Where error occurred'
  })
  */
  return res.status(err.status || 500).json({
    success: false,
    err: {
      code: err.code,
      message: err.message,
      error: err,
    },
  });
});

app.listen(process.env.PORT || PORT, () =>{
  console.log(`Server is up and listening on port ${PORT}.`)
});

module.exports = app;