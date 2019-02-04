const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const News = mongoose.model("News", {title: String, author: String, id: Number});

/* GET news listing. */
router.get('/', (req, res, next) => {
  News.find({}, (err, docs) => {
    res.send(JSON.stringify(docs));
    res.end()
  });
  }
);

/* GET news with id listing. */
router.get('/:id', (req, res, next) => {
    News.findOne({id: req.params.id}, (err, docs) => {
        res.send(JSON.stringify(docs));
        res.end()
    });
});

/* POST news listing. */
router.post('/', (req, res, next) => {
  const article = new News({title: req.body.title, author: req.body.author, id: News.length});
  article.save();
  res.end()
});

/* PUT news with id listing. */
router.put('/:id', (req, res, next) => {
    News.findOneAndUpdate({id: req.params.id}, req.body)
        .then(() => res.end)
        .catch((_) => console.log(_));
});

/* DELETE news with id listing. */
router.delete('/:id', (req, res, next) => {
    News.findOneAndDelete({id: req.params.id})
        .then(() => res.end)
        .catch((_) => console.log(_));
});

module.exports = router;
