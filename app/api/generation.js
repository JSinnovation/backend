const { Router } = require('express');
//local router instance of the router class
const router = new Router();


router.get('/', (req, res) => {
  
  res.json({ generation: req.app.locals.engine.generation });
});

//getting current generation with the Root slash endpoint.
//console.log(router);
module.exports = router;