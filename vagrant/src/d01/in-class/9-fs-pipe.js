var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/assets/lorem.txt');

var writable = fs.createWriteStream(__dirname + '/assets/newLorem.txt');

readable.pipe(writable);

var compressed = fs.createWriteStream(__dirname + '/assets/lorem.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed);
