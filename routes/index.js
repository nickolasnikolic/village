var express = require('express');
var router = express.Router();

var neo = require('seraph')({
  server: process.env.GRAPHSTORY_URL || 'http://localhost:7474',
  user: 'neo4j',
  pass: 'an0moly'
});

router.get('/caregiver', function(req, res, next) {
  neo.query('match (n:caregiver) return n', function(err, result){
    if(err) throw err;
    res.status(200).send(result);
  });
});

router.post('/caregiver', function(req, res, next) {

  neo.query('create (n:caregiver {name: {name}, email: {email}})',{
    name: req.body.name,
    email: req.body.email
  },function(err,node){
    if(err) console.log(err);
    console.log(node);
    res.status(200).send(node);
  });

});

router.post('/caredfor', function(req, res, next) {

  neo.query('create (n:caredfor {name: {name}, email: {email}})',{
    name: req.body.name,
    email: req.body.email
  },function(err,node){
    if(err) console.log(err);
    console.log(node);
    res.status(200).send(node);
  });

});

router.post('/family', function(req, res, next) {

  neo.query('create (n:family {name: {name}, email: {email}})',{
    name: req.body.name,
    email: req.body.email
  },function(err,node){
    if(err) console.log(err);
    console.log(node);
    res.status(200).send(node);
  });

});

router.post('/friend', function(req, res, next) {

  neo.query('create (n:friend {name: {name}, email: {email}})',{
    name: req.body.name,
    email: req.body.email
  },function(err,node){
    if(err) console.log(err);
    console.log(node);
    res.status(200).send(node);
  });

});

router.post('/relate/caresfor',function(req, res, next){
  var node1 = req.body.node1;
  var node2 = req.body.node2;

  var cypher = 'match (a {email:{n1}}),(b {email: {n2}}) create a-[r:caresfor]->b return a,r,b';
  var parameters = {n1: node1, n2: node2};
  neo.query(cypher, parameters ,function(err, relationship){
    console.log(relationship);
    var returnCypher = 'match n-[r]->t return n,r,t'
    neo.query(returnCypher, function(err, result){
      res.status(200).send(result);
    });
  });
});

module.exports = router;
