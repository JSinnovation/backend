//GLOBAL CONSTANT
const TRAITS = require('../data/traits');

const DEFAULT_PROPERTIES = {
  nickname: 'unnamed',
  generationId: undefined,
  get birthdate() {
    return new Date()
  },
  get randomTraits() {
    const traits = [];

    //passing back a callback function
    TRAITS.forEach(TRAIT => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;
      
      const traitValue = traitValues[
        //Math.floor removes decimal point and trailing values
        Math.floor(Math.random() * traitValues.length)
      ];
      traits.push({
        traitType,
        traitValue
      });
    });

    return traits;
  }
}

class Dragon {
  //keys
  constructor({
    //keys below
    birthdate,
    nickname,
    traits,
    generationId } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    //incoming birthdate of the Constructor
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
  }
}

module.exports = Dragon;