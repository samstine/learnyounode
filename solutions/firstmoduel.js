var fs = require("fs");
var path = require("path");

module.exports = function (directoryName, fileExtension, printFileNames)
{
    if (!fileExtension.startsWith("."))
    {
        fileExtension = "." + fileExtension;
    }

    fs.readdir(directoryName, function doneReading(err, allFileNames) {
        if (err !== null) {
            return printFileNames(err);
        }
        
        var filteredFileNames = [];

        allFileNames.forEach(function(fileName){
            var currentFileExtension = path.extname(fileName);

            if (currentFileExtension === fileExtension)
            {
                filteredFileNames.push(fileName);
            }
        });

        return printFileNames(null, filteredFileNames);
    });
}