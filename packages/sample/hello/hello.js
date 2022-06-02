const axios = require("axios");

async function main() {
  const sharks = axios.get("https://functionschallenge.com/api/sammy");
  return { sharks };
}

exports.main = main;
