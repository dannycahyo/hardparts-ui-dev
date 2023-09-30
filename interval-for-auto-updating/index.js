let post;

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");
const jsButton = document.querySelector("button");

function renderDataToView() {
  jsInput.value = post === undefined ? "What's on ur mind ?" : post;
  jsDiv.textContent = post;
}

function handleInput() {
  post = jsInput.value;
}

function handleButtonClick() {
  jsInput.value = "";
  post = "";
}

function handleBlur() {
  if (post === "") {
    post = undefined;
  }
}

jsInput.oninput = handleInput;
jsInput.onfocus = handleButtonClick;
jsInput.onblur = handleBlur;
jsButton.onclick = handleButtonClick;

setInterval(renderDataToView, 100);
