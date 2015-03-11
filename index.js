(function(exports){
  exports.hoge = function() {
    console.log("hogeeeeeeeeeeee");
  };
  var fields = function(json1, json2) {
    for (var key in json1) {
      // it's not own propertey
      if (! json1.hasOwnProperty(key)) continue;
      // json2 has no property for this key
      if (json2[key] == undefined) {
        console.log("NG", key);
        return false;
      }
      // if object, call recursively
      if (typeof json1[key] == "object") {
        if (! fields(json1[key], json2[key])) {
          console.log("NG", key);
          return false;
        }
      }
      // else, it's primitive
      if (typeof json1[key] != typeof json2[key]) return false;
      console.log("PASS", key);
      continue;
    }
    return true
  }
  exports.fields = function(a, b) {
    var json1 = require(a);
    var json2 = require(b);
    return fields(json1, json2);
  };
})(module.exports);
