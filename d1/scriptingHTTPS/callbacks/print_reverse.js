var getHTML = require('../http-functions');

function printReverse(html) {
	var splitHTML = html.split("").join("");
	var reverseHTML = splitHTML.split("").reverse().join("");
  console.log(reverseHTML);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printReverse);
