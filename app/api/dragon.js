const { Router } = require('express');//not root export so we need to use curly braces
const DragonTable = require('../dragon/table')

const router = new Router();

router.get('/new', (req, res, next) => {
  const dragon = req.app.locals.engine.generation.newDragon();
  

  DragonTable.storeDragon(dragon)
    .then(({ dragonId }) => {
      console.log('dragonId', dragonId);
      dragon.dragonId = dragonId;
      res.json({ dragon });
    })
  
    .catch(error => next(error));
  
 
});

//sets up a get web request  using a call back function ' () =>
//console.log(router);

module.exports = router;
