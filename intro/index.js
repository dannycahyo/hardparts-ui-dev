let post = "";

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");
const jsButton = document.querySelector("button");

function handleInput() {
  post = jsInput.value;
  jsDiv.innerHTML = post;
}

function handleButtonClick() {
  jsInput.value = "";
  jsDiv.innerHTML = "";
}

jsInput.oninput = handleInput;
jsButton.onclick = handleButtonClick;
