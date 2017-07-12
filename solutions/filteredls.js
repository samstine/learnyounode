var fs = require("fs");
var path = require("path");

var directroyPath = process.argv[2];
var fileExtension = process.argv[3];

if (!fileExtension.startsWith("."))
{
    fileExtension = "." + fileExtension;
}

function readDirectoryAsync() {
    fs.readdir(directroyPath, function doneReading(err, directoryContents){
        if (err !== null) {
            return console.log(err);
        }

        directoryContents.forEach(function(fileName) {
            var currentFileExtension = path.extname(fileName);

            if (currentFileExtension === fileExtension)
            {
                console.log(fileName);
            }
        });
    });
}

readDirectoryAsync();