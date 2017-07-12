var firstMoudle = require('./firstmoduel.js');

firstMoudle.getFilesWithExtenstion(process.argv[2], process.argv[3], printFileNames);

function printFileNames(err, fileNames)
{
    if (err !== null)
    {
        console.log(err);
    } else {
        fileNames.forEach(function(fileName){
            console.log(fileName);
        });
    }
}