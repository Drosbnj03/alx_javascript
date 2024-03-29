const request = require("request");

const url = process.argv[2];

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.trim()); // Trim any leading or trailing whitespace
  } else {
    console.error("Error:", error);
  }
});