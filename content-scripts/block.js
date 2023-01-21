const bad_words = ['the', 'dogs', 'and'];

let counter = 0;

// Add a message listener that sets the value of "replace"
chrome.runtime.onMessage.addListener((request) => {
  //if (request["scanPage"]) scanPage();
  //alert("eventlistener");
  doScan();
});

function doScan() {
  //alert("eneterd doScan");
  walkNodes(document.body);
  alert("number of words" + counter);
  const para = document.createElement("p");
  const scanResponseText = document.createTextNode("Hello");
  para.appendChild(scanResponseText);
  //const element = document.getElementById("popup-content");
  const element = document.querySelector(".popup-content");
  element.appendChild();
}


function walkNodes(node) {
  //alert("entered walknodes");
  let child, next;

  // We use a switch statement to decide what to do based on the node type.
  // See: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  switch (node.nodeType) {
    case 1: // Element - you could check for specific kinds of elements here
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walkNodes(child);
        child = next;
      }
      break;
    case 3: // Text node
      //alert("entered case 3");
      handleText(node);
      break;
  }
}

// Replaces the text inside a node using the replaceAll function
function handleText(textNode) {
  let split_words = textNode.nodeValue.split(' ');
  //console.log(split_words);
  for (let split = 0; split < split_words.length; split++){
    for (let list_word = 0; list_word < bad_words.length; list_word++){
      if (split === list_word){
        counter += 1;
      }
    }
  }
}
