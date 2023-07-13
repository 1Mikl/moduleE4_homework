// Создаем пустой объект
const obj = {};

// Добавляем свойства разных типов
obj.prop1 = "Привет";
obj.prop2 = 42;
obj.prop3 = true;

// Добавляем метод
obj.method = function() {
    console.log("Метод объекта");
};

// Удаляем одно из свойств
delete obj.prop2;

console.log(obj)

for(let key in obj){
    console.log(key);
}