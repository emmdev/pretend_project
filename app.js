
const fetch = require('node-fetch');

console.log("welcome");
console.log("hi from Emmanuel");

fetch('https://google.com/')
.then(
	(response) => response.text()
)
.then(
	(text) => console.log(text)
);
