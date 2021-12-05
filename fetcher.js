const request = require('request');
const URL = process.argv[2];
const filePath = process.argv[3];
const fs = require('fs');



request(URL,(error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.log(" There is an error")
    return 
  }

  if (!filePath) {
    console.log("The filePath is invalid");
  } else {
    fs.writeFile(filePath, body, () => {
      console.log(`Downloaded and saved ${body.length}bytes to ${filePath}`);
    });
  }
});


