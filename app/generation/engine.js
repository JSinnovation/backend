const Generation = require('./index');
const GenerationTable = require('./table');

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
    this.buildNewGeneration();
  }

  stop() {
    clearTimeout(this.timer); 
  }

  buildNewGeneration() {
    const generation = new Generation();

    GenerationTable.storeGeneration(generation)
      .then(({ generationId }) => {
        this.generation = generation;

        this.generation.generationId = generationId;
        
        console.log('new generation', this.generation);

    this.timer = setTimeout(
      () => this.buildNewGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
      })
      .catch(error => console.error(error));
    
    
    //only after the generation has expired....subtract date.now milliseconds
    //tells us the number of milliseconds to get to this expiration time
  }
}


module.exports = GenerationEngine;  