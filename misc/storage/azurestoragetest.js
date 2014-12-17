var azurestorage = require('azure-storage');
var fs = require('fs');
var blobclient = azurestorage.createBlobService('');

blobclient.getBlobToStream('testcontainer','myblob', fs.createWriteStream(''),function(error, result, response){
    if(!error){
	console.log("File download succeed.");
    }
});
