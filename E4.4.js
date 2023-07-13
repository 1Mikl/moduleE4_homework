function DeviceEl(name){
    this.name = name;
    this.pluggedIn = false;
}


DeviceEl.prototype.elDeviceWork = function(){
    if(this.electric && this.switchon) {
        pluggedIn = true;
    } else {
        pluggedIn = false;
    }
    return (pluggedIn)


}

function ElectricDevice(name, power, electric, swichon){
    this.name = name;
    this.power = power;
    this.electric = electric;
    this.switchon = swichon;
    this.PowerShow = function(){
        console.log(`Потребление: ${name} - ${power} ватт`)
    }
}

ElectricDevice.prototype = new DeviceEl();

// let electricDiv = [lamp, comp, usbС];
let sumPower = function(){
    let sum = 0;
    for(let i of electricDiv) {
        if( i.elDeviceWork()) {
            sum += i.power;
        } else {
            sum;
        }
    }
    return sum;
}

const lamp = new ElectricDevice( name = 'Лампа', power = 60, electric = true, swichon = true);
const comp = new ElectricDevice( name = 'Компьютер', power = 550, electric = true, swichon = true);
const usbС = new ElectricDevice( name = 'usb', power = 10, electric = false, swichon = true);
let electricDiv = [lamp, comp, usbС];


console.log(lamp.elDeviceWork());
console.log(comp.elDeviceWork());
console.log(usbС.elDeviceWork());


console.log(sumPower(electricDiv));
lamp.PowerShow();
comp.PowerShow();
usbС.PowerShow();