async function main(args) {
  const res = fetch("https://functionschallenge.com/api/sammy");
  const data = await res.json();
  return { sharks: data };
}

exports.main = main;
