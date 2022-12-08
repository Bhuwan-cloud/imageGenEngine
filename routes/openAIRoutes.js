const express = require('express');
const router = express.Router();
const{genImage} = require("../controllers/openaiController") 

router.post('/genimage', genImage)


module.exports = router;