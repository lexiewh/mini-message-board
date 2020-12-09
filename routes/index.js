var express = require('express');
var router = express.Router();

const messages = [
  {
    user: "Lexie",
    text: "I'm making an express server from scratch",
    dateCreated: new Date()
  },
  {
    user: "Claire",
    text: "That's awesome!",
    dateCreated: new Date()
  },
  {
    user: "Anna",
    text: "I wish I could do that!",
    dateCreated: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

// TODO: create post request
router.post('/new', function(req, res, next) {
  console.log(req.body)
  // deconstruction for ease
  const { messageUser, messageText } = req.body
  messages.push({user: messageUser, text: messageText, dateCreated: new Date()})
  res.redirect('/')
});

module.exports = router;
