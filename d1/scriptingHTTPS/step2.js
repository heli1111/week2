
const https = require("https");

function getAndPrintHTML () {
	
	var requestOptions = {
    	host: 'sytantris.github.io',
    	path: '/http-examples/step1.html'
  	};


	https.get(requestOptions, function(response){
		
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

getAndPrintHTML();