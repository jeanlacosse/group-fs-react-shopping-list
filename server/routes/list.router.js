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

module.exports = router;
