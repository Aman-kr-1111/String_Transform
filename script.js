const inputData = document.querySelector(".input-data");
const lowercaseSpan = document.querySelector(".lowercaseSpan");
const uppercaseSpan = document.querySelector(".uppercaseSpan");
const camelcaseSpan = document.querySelector(".camelcaseSpan");
const pascalcaseSpan = document.querySelector(".pascalcaseSpan");
const snakecaseSpan = document.querySelector(".snakecaseSpan");
const kebabcaseSpan = document.querySelector(".kebabcaseSpan");
const trimcaseSpan = document.querySelector(".trimcaseSpan");

inputData.addEventListener("input", () => {
  const Data = inputData.value.trim();
  lowercaseSpan.innerText = Data.toLowerCase();
  uppercaseSpan.innerText = Data.toUpperCase();
  camelcaseSpan.innerText = camelcase(Data);
  pascalcaseSpan.innerText = pascalcase(Data);
  snakecaseSpan.innerText = snakecase(Data);
  kebabcaseSpan.innerText = kebabcase(Data);
  trimcaseSpan.innerText = trimcase(Data);
});

// Camel case function
function camelcase(str) {
  const wordArray = str.toLowerCase().split(/\s+/);
  const finalArray = wordArray.map((word, idx) => {
    if (idx === 0) return word;
    return capitalizeString(word);
  });
  return finalArray.join("");
}

function capitalizeString(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

// Pascal case function
function pascalcase(str) {
  const wordArray = str.toLowerCase().split(/\s+/g);
  const finalArray = wordArray.map((word, idx) => {
    return capitalizeString(word);
  });
  return finalArray.join("");
}

// Snake case function
function snakecase(str) {
  return str.replace(/\s+/g, "_");
}

// Kebab case function
function kebabcase(str) {
  return str.replace(/\s+/g, "-");
}

// Trim case function
function trimcase(str) {
  return str.replace(/\s+/g, "");
}
