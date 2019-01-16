var express = require('express');
var router = express.Router();

/* GET news listing. */
router.get('/', function(req, res, next) {
    res.send('GET /news');
    res.end()
  }
);

/* GET news with id listing. */
router.get('/:id', function(req, res, next) {
  console.log("GET /news/{id}", req.params.id);
  res.end()
});

/* POST news listing. */
router.post('/', function(req, res, next) {
  console.log("POST /news");
  res.end()
});

/* PUT news with id listing. */
router.put('/:id', function(req, res, next) {
  console.log("PUT /news", req.params.id);
  res.end()
});

/* DELETE news with id listing. */
router.delete('/:id', function(req, res, next) {
  console.log("DELETE /news/{id} ", req.params.id);
  res.end()
});

module.exports = router;
