

// Create a block container div and append it to the document
// const blockContainer = document.createElement("div");
// blockContainer.classList.add("blockContainer");
// document.body.appendChild(blockContainer);

// function addBlock() {

// }



// // Add a message listener that sets the value of "replace"
// chrome.runtime.onMessage.addListener((request) => {
//   showBlocks = request["enable"];
//   if (request["addBlock"]) addBlock();
//   renderBlocks();
// });

const bad_words = ['hello', 'the', 'and'];

let counter = 0;

function walkNodes(node) {
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
      handleText(node);
      break;
  }
}

// Replaces the text inside a node using the replaceAll function
function handleText(textNode) {
  let split_words = textNode.nodeValue.split(' ');
}


//is textNode.nodeValue the actual word
if (word == any word in bad words list) {
  counter += 1
}

once at the end of html file {
  add text to popup with the value of counter
}