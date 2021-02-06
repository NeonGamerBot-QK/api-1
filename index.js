// REQUIREMENTS
const express = require("express");
const app = express();
const listener = app.listen(process.env.PORT, () => {
// LISTENER'S PORT 
console.log("Your app is listening on port " + listener.address().port);
});
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);

app.get("/api/cat-fact", (req, res) => {
// FACTS 
const facts = ["Cat people are 11% more likely to be introverted.", 
 "Cats and humans have nearly identical sections of the brain that control emotion.", 
 "Cats are really cool.", 
 "Polydactyl cats are also referred to as \"Hemingway cats\" because the author was so fond of them.", // I ESCAPED THE TWO " BECAUSE OTHERWISE IT WOULDN'T WORK
 "Cats have the largest eyes relative to their head size of any mammal.", 
 ];
// THE FACTS MUST BE CHANGED BY YOURSELF IN THIS BASIC EXAMPLE,
// TO ADD A NEW ONE, YOU NEED TO REPEAT THE PROCESS, SOMETHING LIKE THIS:
// "SOME COOL FACT HERE",

// RANDOM NUMBER FOR FACT
 const fact = Math.floor(Math.random() * facts.length);
// SEND FACT TO THE REQUEST RESPONSE
 res.json({ success: "true", facts: facts[fact] });
});

app.get("/api/fun/emoji", (req, res) => {
// FACTS 
const facts = ["😀", "🚗",  "😇",  "😕", "👌", "👺", "🙌", "😄", "😁", "😅","😂","🤣", 
 ];
// THE FACTS MUST BE CHANGED BY YOURSELF IN THIS BASIC EXAMPLE,
// TO ADD A NEW ONE, YOU NEED TO REPEAT THE PROCESS, SOMETHING LIKE THIS:
// "SOME COOL FACT HERE",

// RANDOM NUMBER FOR FACT
 const fact = Math.floor(Math.random() * facts.length);
// SEND FACT TO THE REQUEST RESPONSE
 res.json({ success: "true", emoji: facts[fact] });
});
app.get("/api/fun/meme", (req, res) => {
  const links = ["link1", "link2", "etc..."]
const captions = ["caption1", "caption2", "etc..."]

const getRand = Math.floor(Math.random() * links.length);
const link = links[getRand]
const mcaption = captions[getRand]

res.json({ success: "true", url: link, caption: mcaption})
})

/*
app.get("/api/catagorie/name", (req, res) => {
// FACTS 
const facts = ["", 
 "", 
 "", 
 "", 
 ];
// THE FACTS MUST BE CHANGED BY YOURSELF IN THIS BASIC EXAMPLE,
// TO ADD A NEW ONE, YOU NEED TO REPEAT THE PROCESS, SOMETHING LIKE THIS:
// "SOME COOL FACT HERE",

// RANDOM NUMBER FOR FACT
 const fact = Math.floor(Math.random() * facts.length);
// SEND FACT TO THE REQUEST RESPONSE
 res.json({ success: "true", fact: facts[fact] });
});
code to make a / */ 