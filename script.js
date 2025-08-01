// Data object example
const person = {
  name: "Tatyana",
  age: 30,
  profession: "Web Developer",
};
/*function person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}
const person1 = new person("Tatyana", 30, "Web Developer");*/

// Display data object as formatted text in dataDisplay div
const dataDisplay = document.getElementById('dataDisplay');
dataDisplay.textContent = JSON.stringify(person, null, 2);

// Button for "Read More" scrolls smoothly to DOM elements section
const readMoreBtn = document.getElementById('readMoreBtn');
const domSection = document.getElementById('domElements');
readMoreBtn.addEventListener('click', () => {
  domSection.scrollIntoView({ behavior: 'smooth' });
});

// DOM elements example: change the text inside domExample div on button click
const domExample = document.getElementById('domExample');
const changeDomBtn = document.getElementById('changeDomBtn');

changeDomBtn.addEventListener('click', () => {
  domExample.textContent = "🚀 The text was changed using a DOM element and event listener!";
});
