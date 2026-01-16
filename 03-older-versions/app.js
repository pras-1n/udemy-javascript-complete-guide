// let name = "Prashant";

// if (name === "Prashant") {
// 	let hobbies = ["Language learning", "Reading philosophies"];
// 	console.log(hobbies);
// }

// function greet() {
// 	let age = 30;
// 	let name = "Johan";
// 	console.log(name, age, hobbies);
// }

// console.log(name, hobbies);

// greet();
//

// 'use strict';

// const username = "Moisty";
// var userName = "Johan";

// console.log(userName);

// function getName() {
// 	return prompt("Your name: ", "");
// }

// function greet() {
// 	const userName = getName();
// 	console.log("Hello" + userName);
// }

// greet();

const addListenerBtn = document.getElementById('add-listener-btn');
const addListenerBtn = document.getElementById('clickable-btn');
const addListenerBtn = document.getElementById('click-message-input');

let person = {name: 'Pras'};

person = null;

function printMessage() {
	const value = messageInput.value;
	console.log(value || 'Clicked me!');
}

funtion  addListener () {
	clickableBtn.addEventListener('click', function(){
		const value = messageInput.value;
		console.log(value || 'Clicked me!');
	});
}

addListenerBtn.addEventListener('click', addListener);