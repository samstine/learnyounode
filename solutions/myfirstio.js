var fs = require("fs");
var filePath = process.argv[2];
var fileBuffer = fs.readFileSync(filePath);
var fileContents = fileBuffer.toString();
var splitContents = fileContents.split("\n");
var newLineCount = splitContents.length;

if (splitContents[splitContents.length - 1] !== "")
{
    newLineCount -= 1;
}

console.log(newLineCount);