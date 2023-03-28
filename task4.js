// Device
function Device(name){
    this.name = name;
    this.model = String();
    this.active = false;
    this.wattage = 0;
}
Device.prototype.turnOn = function (){
    this.active = true;
}
Device.prototype.turnOff = function (){
    this.active = false;
}
// Phone
Phone.prototype = new Device("Телефон");
function Phone(model,wattage){
    this.model = model;
    this.mode = 1;
    this.wattage = wattage;
}
Phone.prototype.setMode = function (mode){
    this.mode = mode;
    this.wattage *= mode;
}
// Laptop
Laptop.prototype = new Device("Ноутбук");
function Laptop(model, wattage){
    this.model = model;
    this.wattage = wattage;
    this.workload = 1;
}
Laptop.prototype.setWorkload = function (workload){
    this.workload = workload;
    this.wattage *= workload;
}
// Instances
const phone1 = new Phone("Iphone", 100);
const phone2 = new Phone("Samsung", 120);
const asus = new Laptop("Asus",100);
const msi = new Laptop("MSI",110);
phone1.turnOn();
phone2.turnOn();
phone2.setMode(2);
asus.turnOff();
msi.turnOn();
msi.setWorkload(3);
console.log(getWattage([phone1,phone2,asus,msi]));
// В розетку влючены:
// Телефон "Iphone" (100 Вт)
// Телефон "Samsung" (120 Вт)
// Ноутбук "Asus" ( 100 Вт)
// Ноутбук "MSI" (110 Вт)
// Потребляемая мощность: 430 Вт.
function getWattage(devices){
    let answer = "В розетку включены: \n";
    let wattage = 0;
    devices.forEach((element) => {
        if (element.active){
            answer += element.name + " \"" + element.model + "\" (" + element.wattage + " Вт)\n";
            wattage += element.wattage;
        }
    });
    answer += "Потребляемая мощность: " + wattage + "Вт.";
    return answer
}