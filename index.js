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

app.get("/help", (req, res) => {
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
 res.json({ success: "true", help: "GET /api/cat-fact GET /api/fun/emoji GET /api/fun/meme - beta",
  github: "comming soon",
 server: "https://discord.gg/cXhAxRHHmS" });
});


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
app.get("/api/fun/chatbot", (req, res) => {
// FACTS 
const facts = ["what im just a random thing", 
 "*sus*", 
 "Hii i wak into this...", 
 " im lagging beep-boop!",
 "ima bad boy",
 "what ArE YoU DoInG stEP BRO!",
 "fbi is comming i just called them",
 "mad sus",
 "dead chat *maybe* ",
 "**__only Discord users se this bold and underlined__**",
 "no politcis my guy",
 "imagine swearing",
 "24/7 i am!",
 "\`console.log(\'they hat this\')\`",
 "thoughts on crona?",
 "revive chat!",
 "ended for now**...**",
 ];
// THE FACTS MUST BE CHANGED BY YOURSELF IN THIS BASIC EXAMPLE,
// TO ADD A NEW ONE, YOU NEED TO REPEAT THE PROCESS, SOMETHING LIKE THIS:
// "SOME COOL FACT HERE",

// RANDOM NUMBER FOR FACT
 const fact = Math.floor(Math.random() * facts.length);
// SEND FACT TO THE REQUEST RESPONSE
 res.json({ success: "true", fact: facts[fact] });
});

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