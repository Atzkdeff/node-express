let express = require('express');
let router = express.Router();

/* GET news listing. */
router.get('/', (req, res, next) => {
    res.send('GET /news');
    res.end()
  }
);

/* GET news with id listing. */
router.get('/:id', (req, res, next) => {
  console.log("GET /news/{id}", req.params.id);
  res.end()
});

/* POST news listing. */
router.post('/', (req, res, next) => {
  console.log("POST /news");
  res.end()
});

/* PUT news with id listing. */
router.put('/:id', (req, res, next) => {
  console.log("PUT /news", req.params.id);
  res.end()
});

/* DELETE news with id listing. */
router.delete('/:id', (req, res, next) => {
  console.log("DELETE /news/{id} ", req.params.id);
  res.end()
});

module.exports = router;
