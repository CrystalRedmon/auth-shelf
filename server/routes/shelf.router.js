const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM "item";`;

  pool.query(sqlText)
  .then((dbRes) => {
    res.send(dbRes.rows)
  })
  .catch((err) => {
    console.log('error getting dbRes')
  }) // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
   // endpoint functionality
   
   console.log(req.body);

   
   console.log(req.body.data);

  const sqlText = `INSERT INTO "item"
                    ("description", "image_url", "user_id")
                    VALUES
                    ($1, $2, $3);`;

  const sqlParams = [
    req.body.description,
    req.body.image_url,
    req.user.id
  ]

  console.log('sql params is??????', sqlParams)
  pool.query(sqlText, sqlParams)
  .then(dbRes=>{
    res.sendStatus(200);
    console.log('Item Added');
  })
  .catch(error=>{
    res.sendStatus(500);
    console.log('Add failed', error);
  })

});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality

  // const sqlText = `DELETE FROM "item" WHERE "id" = $1;`;
  // const sqlParams = req.params.id
  pool.query(sqlText, [sqlParams])
  .then((dbRes) => {
    res.send(200)
  })
  .catch((err) => {

  })


});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
