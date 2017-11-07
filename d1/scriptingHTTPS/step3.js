const https = require("https");

var requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {

	/* Add your code here */

	https.get(options, function(response){
		
		let dataBuffer = "";

	 	response.setEncoding('utf8');

		response.on('data', function(data){
			dataBuffer += data;
		});

		response.on('end', function(){
			console.log(dataBuffer);
			console.log('response stream complete.');
		});
		
	});
}

getAndPrintHTML(requestOptions);