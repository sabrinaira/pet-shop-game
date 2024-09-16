//////////////////////////////////////////////////////
///                                                ///
///                  FCNY UNIT 5                   ///
///                                                ///
///              TEXT ADVENTURE GAME               ///
///                                                ///
//////////////////////////////////////////////////////

/**
 * setting: pet shop
 * choose your character: cat, dog, rabbit, hamster
 * meet new friend, meet another new friend, hide
 * interact: snuggle, play, bite, bark, scratch, meow
 * find a new home, stay at pet shop
 * game over











*/

// We use an Object here to keep track of all our messages in one easy to access place. You can use a different method if you like.
const messages = {
  A: `Welcome to the pet shop!
Click OK to go inside, or click CANCEL to leave.`,
  B1: `We hope you have fun in our store!`,
  B2: `Goodbye, come back another day!`,
  B3: `Sorry, we don't have any of those in stock today!`,
  C: `Choose your pet character: Type bunny, cat, dog, or fish.`,
  D1: `Do you want to make a human friend?
Type meet new friend or hide.`,
  bunny: `How will you interact with your new friend?
Type snuggle or bite.`, //Bunny
  cat: `How will you interact with your new friend? 
Type purr or scratch.`, //Cat
  dog: `How will you interact with your new friend? 
Type snuggle or bark.`, //Dog
  fish: `How will you interact with your new friend? 
Type show off or swim away.`, //Fish
  E: `Adoption application received! 
Congratulations! You're going home with your new friend!`,
  F: `Game Over. Thanks for playing! Or refresh the page to play again.`,
  G: `Oops - that wasn't one of the options! Try again.`,
  H: `Feeling lonely... :(`,
};

const interact = {
  //pet1 for bad actions, pet2 for good actions
  dog1: `Your friend doesn't like when you bark :/ they walk away. You were not adopted.`,
  dog2: `Your friend smiles and scratches your ears!`,
  bunny1: `Your friend says, "Ouch, that bite hurt!" and walks away. You were not adopted.`,
  bunny2: `Your friend says, "Aww, I like when you snuggle!"`,
  fish1: `You died suddenly. You were not adopted.`,
  fish2: `Your friend says, "The prettiest fish I have ever seen!"`,
  cat1: `Your friend doesn't like when you scratch :/ they walk away. You were not adopted.`,
  cat2: `Your friend smiles and scratches you under the chin!`,
};

// alert (shows a message only with OK button)
// confirm (contains OK and CANCEL buttons, where OK is true and CANCEL is false)
// prompt (contains text box for user to input text)

//START GAME HERE
function beginGame() {
  // 'confirm' shows a message and waits for the user to press “OK” or “CANCEL”. It returns true for OK and false for CANCEL/Esc.
  const response = confirm(messages.A);
  if (response) {
    // 'alert' shows a message.
    alert(messages.B1);
    questionC();
  } else {
    alert(messages.B2);
  }
}
//^ START GAME FUNCTION UP HERE

//HOW DO YOU WANT TO INTERACT WITH YOUR NEW FRIEND
//questionE
function questionE(petAct1, petAct2, message3) {
  const response = prompt(message3);
  if (response === 'snuggle') {
    //interact.pet1
    //insert consequence to snuggle
    alert(petAct2);
    adoption();
  } else if (response === 'bite') {
    //interact.pet2
    //insert consequence to bite
    alert(petAct1);
    alert(messages.F);
  } else if (response === 'purr') {
    alert(petAct2);
    adoption();
  } else if (response === 'scratch') {
    alert(petAct1);
    alert(messages.F);
  } else if (response === 'bark') {
    alert(petAct1);
    alert(messages.F);
  } else if (response === 'show off') {
    alert(petAct2);
    adoption();
  } else if (response === 'swim away') {
    alert(petAct1);
    alert(messages.F);
  } else {
    alert(messages.G);
    questionE(petAct1, petAct2, message3);
  }
}

//DO YOU WANT TO MEET A NEW FRIEND
//questionD
function questionD(pet, message) {
  // for questionD
  const response = prompt(message); //
  if (response === 'meet new friend') {
    questionE(interact[pet + '1'], interact[pet + '2'], messages[pet]);
  } else if (response === 'hide') {
    alert(messages.H);
    alert(messages.F);
    //questionF(pet, message); no longer relevant
  } else {
    alert(messages.G);
    questionD(pet, message);
  }
}

//CHOOSE CHARACTER
function questionC() {
  // 'prompt' shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.
  const response = prompt(messages.C);
  if (response === 'bunny') {
    //choose Bunny
    questionD(response, messages.D1);
  } else if (response === 'cat') {
    //choose cat
    questionD(response, messages.D1);
  } else if (response === 'dog') {
    //choose dog
    questionD(response, messages.D1);
  } else if (response === 'fish') {
    //choose fish
    questionD(response, messages.D1);
  } else if (response) {
    alert(messages.B3);
    questionC();
  } else {
    // Catch for all unexpected values
    alert(messages.G);
    questionC();
  }
  return response;
}

// What now? (If choose to hide)
//Choose to hide leads directly to a game over
//or we recognize the choser character as this question leads back to new path
// function questionF(pet, message) {
//   const response = prompt(messages.F);
//   if (response === 'hide all day') {
//     //hiding forever ending
//     alert(messages.B2);
//     // } else if (response === 'meet a friend') {
//     //   alert(messages.L);
//     //   alert(messages.H);
//     //   //try to make a friend
//     //   //questionE(pet, messages[pet], message); // petAct1, petAct2, message3
//     // } else {
//     //   alert(messages.B2);
//   }
// }

//adoption ending
function adoption() {
  const response = alert(messages.E);
  if (response) {
    alert(messages.E);
  } else {
    alert(messages.F);
  }
}

// don't forget to initiate your game!!
beginGame();
