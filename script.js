const jsonData = require("./nockNockJokes.json");

const randomJoke = () => jsonData[Math.floor(Math.random() * jsonData.length)];

const messageGenerator = () => {
  let randomJokeToPrint = randomJoke();
  return `Knock, Knock.\nWho is there?\n${randomJokeToPrint.name}.\n${randomJokeToPrint.name} who?\n${randomJokeToPrint.name}... ${randomJokeToPrint.answer}`;
};

console.log(messageGenerator());
