const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    console.log('Client connected ...')
})


module.exports = router;