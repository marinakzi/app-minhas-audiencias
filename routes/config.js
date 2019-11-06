const express = require("express");
const router = express.Router();

router.get('/',(req, res)=>{
	res.send("página inicial");
});  

 
 
router.get('/me',(req, res)=>{
	res.send("página me");
}); 

module.exports = router; 