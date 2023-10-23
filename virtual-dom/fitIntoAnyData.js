const data = { name: "" };
let vDOM;
let elems;

function updateData(label, value) {
  data[label] = value;
  updateDOM();
}

function createVDOM() {
  return [
    ["input", data.name, handle],
    ["div", `Hello, ${data.name}!`],
    ["div", "Great job!"],
  ];
}
function handle(e) {
  updateData("name", e.target.value);
}
function updateDOM() {
  vDOM = createVDOM();
  elems = vDOM.map(convert);
  document.body.replaceChildren(...elems);
}
function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}
updateDOM();
