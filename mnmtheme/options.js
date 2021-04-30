function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    color: document.querySelector('input[name="color"]:checked').value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    //document.querySelector('input[name="color"]:checked').value = result.color;
	document.getElementById(result.color).checked = true;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("color");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
