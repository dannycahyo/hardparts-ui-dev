let post;

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");
const jsButton = document.querySelector("button");

function renderDataToView() {
  jsInput.value = post === undefined ? "What's on ur mind ?" : post;
  jsDiv.innerHTML = post === undefined ? "" : post;
}

function handleInput() {
  post = jsInput.value;
  renderDataToView();
}

function handleButtonClick() {
  jsInput.value = "";
  post = "";
  renderDataToView();
}

function handleBlur() {
  if (post === "") {
    post = undefined;
    renderDataToView();
  }
}

jsInput.oninput = handleInput;
jsInput.onfocus = handleButtonClick;
jsInput.onblur = handleBlur;
jsButton.onclick = handleButtonClick;

renderDataToView();
