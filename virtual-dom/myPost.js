let posts = [
  "Danny",
  "Aka",
  "Ilham",
  "Andri",
  "Cak Ris",
  "Zainal",
  "Munir",
  "Arif",
  "Hafid",
];

let vDom;
let elems;

function Post(message) {
  return ["div", message];
}

function handleInput(event) {
  posts.push(event.target.value);
}

function createVDOM() {
  return [["input", "foo", handleInput], ...posts.map(Post)];
}

function convertToElem(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

function updateDOM() {
  vDom = createVDOM();
  elems = vDom.map(convertToElem);
  document.body.replaceChildren(...elems);
}

setInterval(updateDOM, 30);
