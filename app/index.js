const express = require('express');//we don't need to specify the node_modules directory
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();
app.locals.engine = engine; //app.locals is used for binding objects to the Express Application 

app.use('/dragon', dragonRouter); //subroute where all route endpoints should attach to, second param is actual router instance
app.use('/generation', generationRouter);

engine.start();



module.exports = app;


/* const Generation = require('./generation');
const generation = new Generation();


console.log('generation', generation);

const gooby = generation.newDragon();

console.log('gooby', gooby);

setTimeout(() => {
  const mimar = generation.newDragon();
  console.log('mimar', mimar);//mimar object in blue

}, 15000);//milliseconds */


