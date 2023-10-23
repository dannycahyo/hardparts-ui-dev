let userName = "";
let vDOM;
let elems;

function updateUserName(value) {
  userName = value;
  updateDOM();
}

function createVDOM() {
  return [
    [
      "input",
      userName,
      function handle(e) {
        updateUserName(e.target.value);
      },
    ],
    ["div", `Hello, ${userName}!`],
    ["div", "Great job!"],
  ];
}

function convertToElem(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

function updateDOM() {
  vDOM = createVDOM();
  elems = vDOM.map(convertToElem);
  document.body.replaceChildren(...elems);
}

updateDOM();
