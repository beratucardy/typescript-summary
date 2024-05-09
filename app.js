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
// 
