var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { key: value };
  var newObj = Object.assign(object, obj);
  return newObj;
}

