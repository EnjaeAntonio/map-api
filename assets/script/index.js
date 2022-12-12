'use strict';

'use strict';

// Utility Functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}
  

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}


function create(element, parent = document) {
  return parent.createElement(element);
}

function log(content) {
  console.log(content);
}

function sleep(duration){
  return new Promise(resolve => {
      setTimeout(resolve, duration)
  });
};
