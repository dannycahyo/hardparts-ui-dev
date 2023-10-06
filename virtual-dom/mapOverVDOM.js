let userName = "";
let vDOM;
let elems;

function createVDOM() {
  return [
    ["input", userName, handleJSInput],
    ["div", `Helllo ${userName} !`],
    ["div", `You are doing a great job!`],
  ];
}

function handleJSInput(e) {
  userName = e.target.value;
}

function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];

  if (node[0] === "input" && document.activeElement === element) {
    jsInputFocus = true;
  } else {
    jsInputFocus = false;
  }

  return element;
}

function updateDOM() {
  if (vDOM)
    document.activeElement == document.querySelector("input")
      ? (isFocus = true)
      : (isFocus = false);
  vDOM = createVDOM();
  elems = vDOM.map(convert);
  document.body.replaceChildren(...elems);
  if (isFocus) elems[0].focus();
}

setInterval(updateDOM, 100);
