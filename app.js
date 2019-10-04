
const fetch = require('node-fetch');

console.log("welcome");

fetch('https://google.com/')
.then(
	(result) => console.log(result)
);
