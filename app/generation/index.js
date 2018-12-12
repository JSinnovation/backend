const Dragon = require('../dragon');
const {
  REFRESH_RATE,
  SECONDS
} = require('../config');
const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.accountIds = new Set();//like an array but entries need to be unique
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
  

   newDragon({accountId}) {
    if (Date.now() > this.expiration) {
      //backticks are needed  for this expression - it's a template literal string uses ${} for interpolation
      throw new Error(`This generation expired on ${this.expiration}`);

     }
     
     if (this.accountIds.has(accountId)) {
       throw new Error('You already have a dragon from this generation');
     }

     this.accountIds.add(accountId);
     
    return new Dragon({ generationId: this.generationId }); 
    
  } 
} 

  module.exports = Generation; 