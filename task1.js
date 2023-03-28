let names = {
    John: 1,
    Jack: 2,
    Jill: 3,
}
let newName = Object.create(names);
newName.Bill = 5;
newName.Dean = 7;
newName.Chris = 9;
logObject(newName);
function logObject(object){
    for (let item in object){
        if (object.hasOwnProperty(item))
        console.log(item + ": " + object[item]);
    }
}