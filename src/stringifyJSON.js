// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return "".concat("[]");
    }
  	var elements = [];
    for (i = 0; i < obj.length; i++) {
  		if (!Array.isArray(obj[i]) && typeof obj[i] !== "object" && typeof obj[i] !== "string") {
  			elements.push("".concat(obj[i]));
  		} else {
        elements.push(stringifyJSON(obj[i]));
  		}
  	}
    return "".concat("[", elements.join(","), "]");
  }
  if (!Array.isArray(obj) && typeof obj === "object" && obj !== null) {
  	var properties = [];
    if (Object.keys(obj).length === 0){
      return "".concat("{}");
    }
  	for (var key in obj) {
      if (key === "undefined") {
        properties;
      } else if (!Array.isArray(obj[key]) && typeof obj[key] !== "object" && typeof obj[key] !== "string" && typeof obj[key] !== "function") {
	  		var propertyStr = "".concat("\"", key, "\"", ":", obj[key]);
	  		properties.push(propertyStr);
	  	} else if (typeof obj[key] === "function" || typeof obj[key] === "undefined"){
        properties;
      } else {
        properties.push("".concat("\"", key, "\":", stringifyJSON(obj[key])));
      }
  	}
    return "".concat("{", properties.join(","), "}");
  }
  
  if (typeof obj === "string") {
    return "".concat("\"", obj, "\"");
  }
  
  return "".concat(obj);
};



