const obj = {a: {b: {c: {d: {e: 'f'}}}}};
function getValue (obj, key) {
    if(obj[key]) {
        return obj[key];
    }
    for(var i in obj) {
        if(obj.hasOwnProperty(i)){
            var foundLabel = getValue(obj[i], key);
            if(foundLabel) { return foundLabel; }
        }
    }
    return null;
}
console.log(getValue(obj, 'c'));
