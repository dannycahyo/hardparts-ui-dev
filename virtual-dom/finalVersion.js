let userName = "";
let vDOM = createVDOM();
let prevDOM;
let elems;

function createVDOM() {
  return [
    ["input", userName, handleInput],
    ["div", `Hello, ${userName}!`],
    ["div", "Great Job!"],
  ];
}

function handleInput(event) {
  userName = event.target.value;
}

function convertToElem(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

function updateDOM() {
  if (elems === undefined) {
    elems = vDOM.map(convertToElem);
    document.body.append(...elems);
  } else {
    prevDOM = [...vDOM];
    vDOM = createVDOM();
    findDiff(prevDOM, vDOM);
  }
}

function findDiff(prevDOM, currentDOM) {
  for (let i = 0; i < prevDOM.length; i++) {
    if (JSON.stringify(prevDOM[i]) !== JSON.stringify(currentDOM[i])) {
      const newElem = convertToElem(currentDOM[i]);
      elems[i].replaceWith(newElem);
      elems[i] = newElem;
    }
  }
}
