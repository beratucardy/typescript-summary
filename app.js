// Data Type - Number-String-Boolean
var age = 25;
var firstName = "Berat";
var lastName = "Uçar";
var isUpdated = true;
function display(id, name) {
    console.log("Id = " + id + ", Name = " + name);
}
display(1, "Berat");
console.log(age, firstName, lastName, isUpdated);
/* --------------------------------------------------------- */
// Data Type - Array
var firstNames = ["Berat", "Savaş"];
console.log(firstNames);
var firstNames2 = ["Berat", "Savaş"];
console.log(firstNames2);
var arr = [1, 3, "Apple", "Orange", "Banana", true, false];
console.log(arr);
var fruits;
fruits = ["Apple", "Banana"];
console.log(fruits);
var values = ["Apple", 2, "Banana", 3, 4];
var values2 = ["Apple", 2, "Banana", 3, 4];
console.log(values, values2);
console.log(fruits[1]);
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
/* --------------------------------------------------------- */
// Data Type - Tuple
var Id = 1;
var instructorName = "Berat";
var instructor = [1, "Berat"];
var user;
user = [1, "Berat", true, 25, "Admin"];
console.log(instructor, user);
var employee;
employee = [
    [1, "Steve"],
    [2, "Bill"],
    [3, "Jeff"],
];
console.log(employee);
var instructor2;
instructor2 = {
    firstName: "Berat",
    lastName: "Uçar",
    age: 25,
    jobTitle: "Software Instructor",
};
console.log(instructor2, instructor2.age, instructor2.lastName);
var person = {
    firstName: "Berat",
    lastName: "Uçar",
    age: 25,
    jobTitle: "Software Instructor",
};
console.log(person, person.firstName);
/* --------------------------------------------------------- */
// Data Type - Enum
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 1] = "Newspaper";
    Media[Media["Newsletter"] = 2] = "Newsletter";
    Media[Media["Magazine"] = 3] = "Magazine";
    Media[Media["Book"] = 4] = "Book";
})(Media || (Media = {}));
// normalde 0'dan başlar ama başlangıç değeri vererek değiştirebiliriz.
console.log(Media.Magazine);
console.log(Media[3]);
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Newsletter);
console.log(PrintMedia["Newspaper"]);
var Ebatlar;
(function (Ebatlar) {
    Ebatlar[Ebatlar["small"] = 0] = "small";
    Ebatlar[Ebatlar["medium"] = 1] = "medium";
    Ebatlar[Ebatlar["large"] = 2] = "large";
})(Ebatlar || (Ebatlar = {}));
console.log(Ebatlar);
/* --------------------------------------------------------- */
// Data Type - Union
var code = 123;
console.log(code);
/* --------------------------------------------------------- */
// Data Type - Any
var someThing = "Hello";
someThing = 25;
someThing = true;
someThing = {
    firstName: "Berat",
    lastName: "Uçar",
};
console.log(someThing, someThing.firstName);
var arr2 = ["John", 212, true];
console.log(arr2);
/* --------------------------------------------------------- */
// Data Type - Void
// Fonksiyon geriye değer döndürmüyorsa kullanılır
function sayHello() {
    var firstName = "Berat";
    console.log("Hi", firstName);
    // return firstName; (yapamazsın)
}
sayHello();
/* --------------------------------------------------------- */
// Data Type - Never
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
/* throwError("Hata"); */
var something = null;
// let nothing: never = null;
// void'e null, undefined atanabilir ama never'a atanamaz, sadece hata mesajı için kullanılır
/* --------------------------------------------------------- */
// Type Inference
var sayac = 0;
console.log(typeof sayac); // Angular'da tip ataması isteniyor ama ts'de atamasan da hata vermez
function increment(counter) {
    return counter++;
}
function increment2(counter) {
    return counter++;
}
// ikiside aynı, number döndüreceğini algılıyor
var a = "some text";
var b = 123;
// a = b; (a'nın string, b'nin number olduğunu algıladı hata verdi)
function sum(a, b) {
    return a + b;
}
var total = sum(10, 15);
//let total: string = sum(10, 15); (number geleceğini anladı, string'e atayamazsın hatası verdi)
/* --------------------------------------------------------- */
// Type Assertion
var code2 = 123;
console.log(typeof code2);
var empCode = code2; // Type Inference yapmasın kendi otomatik atamasın istersem kullanıyorum
console.log(typeof empCode);
var employee2 = {};
console.log(typeof employee2);
employee2.name = "Berat";
console.log(employee2);
/* --------------------------------------------------------- */
// If Else Ternary Operator
var x = 35;
var y = 35;
if (x > y) {
    console.log("x, y'den büyüktür");
}
else if (x < y) {
    console.log("x, y'den küçüktür");
}
else {
    console.log("x ve y eşittir");
}
x > y
    ? console.log("x, y'den büyüktür")
    : x < y
        ? console.log("x, y'den küçüktür")
        : console.log("x ve y eşittir");
/* --------------------------------------------------------- */
// Switch Case
var day = 2;
switch (day) {
    case 0:
        console.log("Pazar");
        break;
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    default:
        console.log("Böyle bir gün yok! Lütfen 0 ile 6 arasında bir rakam giriniz.");
        break;
}
/* --------------------------------------------------------- */
// For Loop
for (var i = 0; i < 3; i++) {
    console.log("i değerim", i);
}
var arr3 = [10, 20, 30, 40];
for (var _i = 0, arr3_1 = arr3; _i < arr3_1.length; _i++) {
    var item = arr3_1[_i];
    console.log(item);
}
var str = "Berat Uçar";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var item = str_1[_a];
    console.log(item);
}
/* --------------------------------------------------------- */
// While Loop - Do While Loop - Break
var counter = 10;
while (counter < 5) {
    console.log(counter);
    counter++;
    if (counter == 3)
        break;
}
do {
    console.log(counter);
    counter++;
} while (counter < 5);
/* --------------------------------------------------------- */
// Function
function add(a, b) {
    return a + b;
}
var toplam = add(10, 20);
console.log(toplam);
function bastir() {
    console.log("Berat Uçar");
    // return "berat"; (yapamazsın)
}
bastir();
function birlestir(ad, soyAd) {
    if (soyAd === void 0) { soyAd = "Uçar"; }
    return ad + " " + soyAd;
}
var degisken = birlestir("Berat");
console.log(degisken);
/* --------------------------------------------------------- */
// Optional Parameters - Arrow Functions
function carpim(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
var degisken2 = carpim(5, 10);
var degisken3 = carpim(5, 10, 3);
console.log(degisken2, degisken3);
var carpim2 = function (a, b) {
    return a * b;
};
var degisken4 = carpim2(4, 5);
console.log(degisken4);
var bastir2 = function () { return console.log("Berat Uçar"); };
bastir2();
function add2(a, b) {
    return a + b;
}
var degisken5 = add2("Berat", " Uçar");
var degisken6 = add2(5, 8);
console.log(degisken5, degisken6);
/* --------------------------------------------------------- */
// Rest Parameters
function toplam2() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return (total += num); });
    return total;
}
console.log(toplam2(10, 20));
/* --------------------------------------------------------- */
// Class
