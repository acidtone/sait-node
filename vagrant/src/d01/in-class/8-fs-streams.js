var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/assets/lorem.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/assets/newLorem.txt');

readable.on('data', function(chunk) {
	console.log(chunk);
	writable.write(chunk);
});