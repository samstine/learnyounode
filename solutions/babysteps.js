//start at 2 to get the actual user input
var output = 0;

for (var i = 2; i < process.argv.length; i++)
{
    output += Number(process.argv[i]);
}

console.log(output);