const router = require("express").Router();
const db = require("../../models");

router.get("/api/test", function(req, res){
  db.Test.find({}).then(resp => {
    res.json(resp)
  })
  .catch(err => {
    res.send(500).json(err)
  })
});


router.post("/api/test", function(req, res){
  db.Test.create(req.body).then(resp => {
    res.json(resp)
  })
  .catch(err => {
    res.send(500).json(err)
  })
});

module.exports = router;