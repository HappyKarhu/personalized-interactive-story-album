let attempts2 = 0;
let attempts3 = 0;

const messages2 = [
  "But the fairy tale about the Glass Snail is prettier.",
  "The Glass Snail fairy tale is truly the most beautiful you’ve ever heard.",
  "You still want the Long Snake? But the Glass Snail is so much prettier.",
  "Alright, but the Glass Snail story is priceless.",
  "Okay, fine… here’s the Long Snake story:"
];

const messages3 = [
  "But the Long Snake story is longer.",
  "The Long Snake fairy tale is really long.",
  "Are you sure you don’t want a looooooong story like the Long Snake?",
  "The Glass Snail is beautiful, but the Long Snake is unbelievably long.",
  "Alright, fine… here’s the Glass Snail story:"
];

function goToStory(number) {
  window.location.href = `story${number}.html`;
}

function chooseStory(number) {
  const messageBox = document.getElementById("message");

  if (number === 2) {
    if (attempts2 < messages2.length) {
      messageBox.textContent = messages2[attempts2++];
    } else {
      goToStory(2);
    }
  } else if (number === 3) {
    if (attempts3 < messages3.length) {
      messageBox.textContent = messages3[attempts3++];
    } else {
      goToStory(3);
    }
  }
}