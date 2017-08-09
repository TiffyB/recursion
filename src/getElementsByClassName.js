// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


// But instead we're going to implement it from scratch:

var node;
var elements;

var getElementsByClassName = function(className) {
	
	if (node === undefined) {
		node = document.body;
		elements = [];
	}
  if (node.classList.contains(className)) {
    elements.push(node);
  }

  if (node.children.length !== 0) {
    var children = node.children; // do i need to slice this instead?
    for (var j = 0; j < children.length; j++) {
      node = children[j];
      getElementsByClassName(className);
    }
  }
  node = undefined;
  return elements;
};


























