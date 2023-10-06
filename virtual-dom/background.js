let post = "";
let jsInput;
let jsDiv;
let jsButton;
let isFocus = false;

function renderElement() {
  jsInput = document.createElement("input");
  jsDiv = document.createElement("div");
  jsButton = document.createElement("button");

  jsInput.value = post;
  jsInput.oninput = handleInput;
  jsDiv.textContent = post;
  jsInput.onclick = handleClearPost;

  jsButton.textContent = "Clear";
  jsButton.onclick = handleClearPost;

  document.body.replaceChildren(jsInput, jsDiv, jsButton);
}

function renderElementWithFocusInput() {
  document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);

  renderElement();
  if (isFocus) jsInput.focus();
}

function handleInput() {
  post = jsInput.value;
}

function handleClearPost() {
  post = "";
}

setInterval(renderElementWithFocusInput, 1000);
