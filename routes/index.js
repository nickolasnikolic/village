var express = require('express');
var router = express.Router();

var neo = require('seraph')({
  server: process.env.GRAPHSTORY_URL || 'http://localhost:7474',
  user: 'neo4j',
  pass: 'an0moly'
});

router.post('/bounce', function(req,res,next){
  res.status(200).send(req.body);
});

router.post('/login', function(req, res, next){
    var user = req.body.loginEmail;
    var password = req.body.loginPassword;

    neo.query('match (node {email: {user}, password: {password}}) return node, labels(node) as labels', {
        user: user,
        password: password
    }, function(err, node){
        if(err) throw err;
        //if user exists, set session var
        if(node){
            console.log(node);//todo
            res.status(200).send(node);
        }
    });
});

router.get('/caregiver', function(req, res, next) {
  neo.query('match (n:caregiver) return n', function(err, result){
    if(err) throw err;
    res.status(200).send(result);
  });
});

router.post('/caregiver', function(req, res, next) {

  neo.query('create (n:caregiver {' +
      'name: {name}, ' +
      'email: {email}, ' +
      'approvalRequired: {approvalRequired},' +
      'licenseNumber: {licenseNumber},' +
      'licenseState: {licenseState},' +
      'licenseType: {licenseType},' +
      'neverCall: {neverCall},' +
      'password: {password},' +
      'phone: {phone},' +
      'safeword: {safeword},' +
      'safewordRequired: {safewordRequired}' +
      '})',{

      name: req.body.name,
      email: req.body.email,

      approvalRequired: req.body.approvalRequired,

      licenseNumber: req.body.licenseNumber,
      licenseState: req.body.licenseState,
      licenseType: req.body.licenseType,

      neverCall: req.body.neverCall,
      password: req.body.password,
      phone: req.body.phone,
      safeword: req.body.safeword,
      safewordRequired: req.body.safewordRequired

  },function(err,node){
    if(err) console.log(err);
    console.log(node);
    res.status(200).send(node);
  });

});

router.post('/caredfor', function(req, res, next) {

  neo.query('create (n:caredfor {' +
  'name: {name}, ' +
  'email: {email}, ' +

  'neverCall: {neverCall},' +
  'password: {password},' +
  'phone: {phone}' +

  '})',{
    name: req.body.name,
    email: req.body.email,

    neverCall: req.body.neverCall,
    password: req.body.password,
    phone: req.body.phone

  },function(err,node){
    if(err) console.log(err);
    console.log(node);
    res.status(200).send(node);
  });

});

router.post('/family', function(req, res, next) {

  neo.query('create (n:family {' +
  'name: {name}, ' +
  'email: {email}, ' +

  'neverCall: {neverCall},' +
  'password: {password},' +
  'phone: {phone}' +

  '})',{
    name: req.body.name,
    email: req.body.email,

    neverCall: req.body.neverCall,
    password: req.body.password,
    phone: req.body.phone

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
    var returnCypher = 'match n-[r]->t return n,r,t';
    neo.query(returnCypher, function(err, result){
      res.status(200).send(result);
    });
  });
});

router.post('/relate/family',function(req, res, next){
    var node1 = req.body.node1;
    var node2 = req.body.node2;

    var cypher = 'match (a {email:{n1}}),(b {email: {n2}}) create a-[r:caresfor]->b return a,r,b';
    var parameters = {n1: node1, n2: node2};
    neo.query(cypher, parameters ,function(err, relationship){
        console.log(relationship);
        var returnCypher = 'match n-[r]->t return n,r,t';
        neo.query(returnCypher, function(err, result){
            res.status(200).send(result);
        });
    });
});

module.exports = router;
