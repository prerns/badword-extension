const bad_words = ['fuck', 'shit', 'bitch', 'hell', 'motherfucker', 'asshole', 'bastard', 'damn'];

let counter = 0;

// Add a message listener that sets the value of "pushing the scan button"
chrome.runtime.onMessage.addListener((request) => {
  //if (request["scanPage"]) scanPage();
  //alert("eventlistener");
  doScan();
});

function doScan() {
  //alert("eneterd doScan");
  walkNodes(document.body);
  //alert("number of words" + counter);
  (async () => {
    const response = await chrome.runtime.sendMessage(counter);
    // do something with response here, not outside the function
    console.log(response);
  })();
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

//counts the number of bad words found
function handleText(textNode) {
  let split_words = textNode.nodeValue.split(' ');
  split_words.forEach((word) => {
    for (let badWord = 0; badWord < bad_words.length; badWord++) {
      if (bad_words[badWord] == word){
        counter += 1;
      }
    }
  });
}
