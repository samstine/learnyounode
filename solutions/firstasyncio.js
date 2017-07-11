var fs = require("fs");
var filePath = process.argv[2];
var newLineCount = 0;

function readFileAsync() {
    fs.readFile(filePath, function doneReading(err, fileContents) {
        if (err !== null) {
            return console.log(err);
        }
        
        var splitContents = fileContents.toString().split("\n");
        newLineCount = splitContents.length;
        
        if (splitContents[newLineCount - 1] !== "")
        {
            newLineCount -= 1;
        }

        console.log(newLineCount);
    });
}

readFileAsync();