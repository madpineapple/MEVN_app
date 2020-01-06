const express= require('express');
const mysql = require('mysql');

const router = express.Router();
const Book= require('../../models/Book');

//Get Books
router.get('/', (req, res)=> {
    //query to find books in table Books
    Book.findAll({raw:true}).then(books=>(res.send(books)))
    .catch(err=>{res.send('error: '+ err)})
    
});

//write reviews


module.exports = router;