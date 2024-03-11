const jsonData = [
    { "name": "Dozen", "answer": "anybody want to let me in?" },
    { "name": "Avenue", "answer": "knocked on this door before?" },
    { "name": "Ice Cream", "answer": "if you don't let me in!" },
    { "name": "Adore", "answer": "is between us. Open up!" },
    { "name": "Lettuce", "answer": "in. It's cold out here!" },
    { "name": "Bed", "answer": "you can not guess who I am." },
    { "name": "Al", "answer": "give you a kiss if you open the door." },
    { "name": "Olive", "answer": "you!" },
    { "name": "Abby", "answer": "birthday to you!" },
    { "name": "Rufus", "answer": "the most important part of your house." },
    { "name": "Cheese", "answer": "a cute girl." }
  ]



const randomJoke = () => jsonData[Math.floor(Math.random() * jsonData.length)];

const messageGenerator = () => {
  let randomJokeToPrint = randomJoke();
  return `Knock, Knock.\nWho is there?\n${randomJokeToPrint.name}.\n${randomJokeToPrint.name} who?\n${randomJokeToPrint.name}... ${randomJokeToPrint.answer}`;
};

const randomBackground = () => "rgb(" + Math. floor(Math. random() * 256) + "," + Math. floor(Math. random() * 256) + "," + Math. floor(Math. random() * 256) + ")";


window.onload = function() {
    document.querySelector("h1").innerText = messageGenerator();
    document. body. style. background = randomBackground();
};
