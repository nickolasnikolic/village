var express = require('express');
var router = express.Router();
var neo = require('seraph')(process.env.GRAPHSTORY_URL || 'http://localhost:7474');

router.get('/caregiver', function(req, res, next) {

  res.status(200).send('test');
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

module.exports = router;
