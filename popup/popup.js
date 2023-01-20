
const scannerButton = document.getElementById("scanner-button");

// Add event listeners to the button
scannerButton.addEventListener("click", (e) => updateContentScript(true));

async function updateContentScript(scanPage) {
  console.log("inside, contentscript")
  // Sends a message to the content script with an object that has the
  // current value of the checkbox and a boolean (whether to add a block)
  const message = {scanPage: scanPage};
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const response = await chrome.tabs.sendMessage(tab.id, message);
  // You can do something with response from the content script here
  console.log(response);
}
