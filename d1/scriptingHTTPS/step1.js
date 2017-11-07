const https = require("https");

function getAndPrintHTMLChunks() {
	
	let requestOptions = {
    	host: 'sytantris.github.io',
    	path: '/http-examples/step1.html'
  	};

 	https.get(requestOptions, function(response){

 		response.setEncoding('utf8');

	 	response.on('data',function(data){
	 		console.log(data, '\n');
	 	});

	 	response.on('end',function(){
	 		console.log('response stream complete.')
	 	});

	});

}

getAndPrintHTMLChunks();

