let post = "";
let jsDiv;
let jsInput;

function renderDataToView() {
  jsInput = document.createElement("input");
  jsDiv = post === "danny" ? "" : document.createElement("div");

  jsInput.value = post;
  jsDiv.textContent = post;
  jsInput.oninput = handleInput;

  document.body.replaceChildren(jsInput, jsDiv);
}

function handleInput() {
  post = jsInput.value;
  renderDataToView();
}

renderDataToView();
