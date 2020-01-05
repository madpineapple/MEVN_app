const express= require('express');
const mysql = require('mysql');

const router = express.Router();

//Get Books
router.get('/', (req, res)=> {
    res.send('hello');
});

//write reviews


module.exports = router;