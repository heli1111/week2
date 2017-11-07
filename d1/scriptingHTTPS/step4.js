const https = require("https");

function getHTML(options, callback) {

	https.get(options, function(response){
		
		let dataBuffer = "";

	 	response.setEncoding('utf8');

		response.on('data', function(data){
			dataBuffer += data;
		});

		response.on('end', function(){
			callback(dataBuffer);
			console.log('response stream complete.');
		});

	});
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)