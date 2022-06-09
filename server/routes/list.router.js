const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// TODO - Add routes here...
router.get("/", (req, res) => {
  const sqlText = `
  SELECT * FROM items 
  ORDER BY LOWER(name);
    `;
  pool
    .query(sqlText)
    .then((result) => {
      console.log(`Grabbing info from DB`, result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`Err in DB query`, err);
      res.sendStatus(500);
    });
});


router.delete('/:id', (req, res) => {
  let itemId = req.params.id;
  console.log('itemId', itemId);

  const sqlQuery = `
      DELETE FROM "items"
      Where id =$1;
      `;

  const sqlParams = [itemId];

  console.log('in Delete /items', itemId);

  pool.query(sqlQuery, sqlParams)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`Delete to items failed`, err)
      res.sendStatus(500)
    });
})

router.delete('/', (req, res) => {

  const sqlQuery = `
  DELETE FROM "items"
  `;

  pool.query(sqlQuery)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`Delete to items failed`, err)
      res.sendStatus(500)
    });
})

router.post('/', (req, res) => {

  const sqlText = `
  INSERT INTO items (name, quantity, unit) 
  VALUES ($1, $2, $3);
  `
  const sqlParams = [
    req.body.name,
    req.body.quantity,
    req.body.unit
  ]

  pool.query(sqlText, sqlParams)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('err is', err);
      res.sendStatus(500)
    });
});


router.put('/', (req, res) => {
  const sqlText = `
  UPDATE items
  SET purchased = false
  `


  pool
    .query(sqlText)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log('Reset Purchases failed', err)
      res.sendStatus(500)
    })
})



module.exports = router;
