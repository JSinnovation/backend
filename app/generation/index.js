const Dragon = require('../dragon');
const {
  REFRESH_RATE,
  SECONDS
} = require('../config');
const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
    this.generationId = undefined;
    //millisecondUntilExpiration//Date.now() is also in milliseconds
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate/2));
    //turinary shorthand for an if statement (below)
    const msUntilExpiration = Math.random() < 0.5 ?
      refreshRate - expirationPeriod :
      refreshRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);

  }
  

   newDragon() {
     
     
    if (Date.now() > this.expiration) {
      //backticks are needed  for this expression - it's a template literal string uses ${} for interpolation
      throw new Error(`This generation expired on ${this.expiration}`);

    }

    return new Dragon({ generationId: this.generationId }); 
    
  } 
} 

  module.exports = Generation; 