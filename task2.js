function isContainProperty(query, object){
    for (let item in object)
    if (item === query) return true;
    return false;
}
let names = {
    Jim:1,
    Andrew:3,
    Cody:8
}
console.log(isContainProperty("Rex", names));