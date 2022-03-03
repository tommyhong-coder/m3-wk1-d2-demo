var express = require('express');
var router = express.Router();

router.get('/home', function(res,res){
    res.setEncoding('Hello world!');
});
router.post('/home', function(req,res){
    res.send("You just call the post method at '/hello'!\n");
});

//export this router to use in the exp_demo3b.js
module.exports = router;