const { Router } = require('express');//not root export so we need to use curly braces

const router = new Router();

router.get('/dragon/new', (req, res) => { 
  res.json({ dragon: req.app.locals.engine.generation.newDragon() });
}); //sets up a get web request  using a call back function ' () =>


module.exports = router;
