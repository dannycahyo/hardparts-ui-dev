let userName = "";
let jsInput;
let jsDiv;
let vDom;
let jsInputFocus = false;

function createVDOM() {
  return [
    ["input", userName, handleJSInput],
    ["div", `Helllo ${userName} !`],
  ];
}

function handleJSInput() {
  userName = jsInput.value;
}

function updateDOM() {
  vDom = createVDOM();
  jsInput = convert(vDom[0]);
  jsDiv = convert(vDom[1]);

  document.body.replaceChildren(jsInput, jsDiv);
}

function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

setInterval(updateDOM, 15);
