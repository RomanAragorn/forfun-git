let charPath
let charElement;

document.querySelectorAll('.js-character-display')
  .forEach((card) => {
    card.addEventListener('click', () => {
      generateCharacter();
      
      const cardId = card.dataset.cardId;
     
      displayCharacter(cardId);

    });
});

document.querySelector('.js-randomize-button').addEventListener('click', () => {
  randomizeAll();
});

function randomizeAll() {
  document.querySelectorAll('.js-character-display')
    .forEach((card) => {
      generateCharacter();
      card.innerHTML = `<img class="character-details" src="images/${charElement}.png"><img class="character-details" src="images/${charPath}.webp">`;
    })
};

function generateCharacter() {
  let characterPath; 
  let characterElement;

  const path = Math.ceil(Math.random() * 7);

  if (path === 1) {
    characterPath = 'destruction';
  } else if (path === 2) {
    characterPath = 'hunt';
  } else if (path === 3) {
    characterPath = 'erudition';
  } else if (path === 4) {
    characterPath = 'harmony';
  } else if (path === 5) {
    characterPath = 'nihility';
  } else if (path === 6) {
    characterPath = 'preservation';
  } else if (path === 7) {
    characterPath = 'abundance';
  } 
  
  charPath = characterPath;

  const element = Math.ceil(Math.random() * 7);

  if (element === 1) {
    characterElement = 'physical';
  } else if (element === 2) {
    characterElement = 'fire';
  } else if (element === 3) {
    characterElement = 'ice';
  } else if (element === 4) {
    characterElement = 'lightning';
  } else if (element === 5) {
    characterElement = 'wind';
  } else if (element === 6) {
    characterElement = 'quantum';
  } else if (element === 7) {
    characterElement = 'imaginary';
  }

  charElement = characterElement;
}

function displayCharacter(cardId) {
  document.querySelectorAll('.js-character-display')
    .forEach((card) => {
      if (card.dataset.cardId === cardId) {
        card.innerHTML = `<img class="character-details" src="images/${charElement}.png"><img class="character-details" src="images/${charPath}.webp">`;
      }
    })
}