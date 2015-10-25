var express = require('express');
var router = express.Router();
var neo = require('seraph')({
  server: process.env.GRAPHSTORY_URL || 'http://localhost:7474',
  user: 'neo4j',
  pass: 'an0moly'
});

router.get('/caregiver', function(req, res, next) {
  neo.query('match n return n', function(err, result){
    if(err) throw err;
    res.status(200).send(result);
  });
});

router.post('/caregiver', function(req, res, next) {
  if(!!req.body.name) {
    neo.save({
      type: 'caregiver',
      name: req.body.name
    },function(err,node){
      if(err) throw err;
      console.log(node);
    });
  }
  res.status(200).send('test');
});

router.post('/caredfor', function(req, res, next) {
  if(!!req.body.name) {
    neo.save({
      type: 'caredfor',
      name: req.body.name
    },function(err,node){
      if(err) throw err;
      console.log(node);
    });
  }
  res.status(200).send('test');
});

router.post('/family', function(req, res, next) {
  if(!!req.body.name) {
    neo.save({
      type: 'family',
      name: req.body.name
    },function(err,node){
      if(err) throw err;
      console.log(node);
    });
  }
  res.status(200).send('test');
});

router.post('/friend', function(req, res, next) {
  if(!!req.body.name) {
    neo.save({
      type: 'friend',
      name: req.body.name
    },function(err,node){
      if(err) throw err;
      console.log(node);
    });
  }
  res.status(200).send('test');
});

router.post('/relate',function(req, res, next){
  var node1 = req.body.node1;
  var node2 = req.body.node2;
  var relType = req.body.relationshipType;

  var cypher = 'match (a) where id({n1}), match (b) where id({n2}) create a-[r:{rel}]->b return a,r,b';
  var parameters = {n1: node1, n2: node2, rel: relType};
  neo.query(cypher, parameters ,function(err, relationship){
    console.log(relationship);
    var returnCypher = 'match n-[r]->t return n,r,t'
    neo.query(returnCypher, function(err, result){
      res.status(200).send(result);
    });
  });
});

module.exports = router;
