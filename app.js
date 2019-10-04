
const fetch = require('node-fetch');

console.log("hello world");
console.log("hi from Emmanuel");

fetch('https://google.com/')
.then(
	(result) => console.log(result)
);
