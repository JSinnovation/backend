const { Router } = require('express');//not root export so we need to use curly braces
const DragonTable = require('../dragon/table');
//const AccountTable = require('../account/table');
//const AccountDragonTable = require('../accountDragon/table');


const router = new Router();

router.get('/new', (req, res, next) => {
  /* let accountId, dragon;
  authenticatedAccount({ sessionString: req.cookies.sessionString })
    .then(({ account }) => {
      accountId = account.id;
      dragon = req.app.locals.engine.generation.newDragon({accountId});
      console.log('dragon to store', dragon);
      return DragonTable.storeDragon(dragon);
  }) */
  //const dragon = req.app.locals.engine.generation.newDragon({accountId});
  const dragon = req.app.locals.engine.generation.newDragon({});

  DragonTable.storeDragon(dragon) 
    .then(({ dragonId }) => {
      //console.log('dragonId', dragonId);
      dragon.dragonId = dragonId;
      res.json({ dragon });
    })
  
    .catch(error => next(error));
  
 
});

//sets up a get web request  using a call back function ' () =>
//console.log(router);

module.exports = router;
