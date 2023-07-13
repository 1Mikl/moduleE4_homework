class DeviceEl {
    constructor(name) {
        this.name = name;
    }
}

class ElectricDevice extends DeviceEl {
    constructor(name, power, electric, swichon) {
        super(name);
        this.power = power;
        this.electric = electric;
        this.swichon = swichon;
    }

    elDeviceWork() {
        let pluggedIn = false;
        if (this.electric && this.swichon) {
            pluggedIn = true;
        } else {
            pluggedIn = false;
        }
        return pluggedIn;
    }

    PowerShow() {
        console.log(`Потребление: ${this.name} - ${this.power} ватт`);
    }

    static sumPower() {
        let sum = 0;
        for (let i of electricDiv) {
            if (i.elDeviceWork()) {
                sum += i.power;
            }
        }
        return sum;
    }
}

const lamp = new ElectricDevice('Лампа', 60, true, true);
const comp = new ElectricDevice('Компьютер', 550, true, true);
const usb = new ElectricDevice('usb', 10, false, true);
let electricDiv = [lamp, comp, usb];

console.log(lamp.elDeviceWork());
console.log(comp.elDeviceWork());
console.log(usb.elDeviceWork());

console.log(ElectricDevice.sumPower(electricDiv));
lamp.PowerShow();
comp.PowerShow();
usb.PowerShow();