const https = require("https");

module.exports = function getHTML(options, callback) {

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
};