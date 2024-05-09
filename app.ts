// Data Type - Number-String-Boolean

let age: number = 25;
let firstName: string = "Berat";
let lastName: string = "Uçar";
let isUpdated: boolean = true;

function display(id: any, name: string) {
  console.log("Id = " + id + ", Name = " + name);
}

display(1, "Berat");

console.log(age, firstName, lastName, isUpdated);

/* --------------------------------------------------------- */

// Data Type - Array

let firstNames: string[] = ["Berat", "Savaş"];

console.log(firstNames);

let firstNames2: Array<string> = ["Berat", "Savaş"];

console.log(firstNames2);

let arr = [1, 3, "Apple", "Orange", "Banana", true, false];

console.log(arr);

let fruits: Array<string>;
fruits = ["Apple", "Banana"];

console.log(fruits);

let values: (string | number)[] = ["Apple", 2, "Banana", 3, 4];
let values2: Array<string | number> = ["Apple", 2, "Banana", 3, 4];

console.log(values, values2);
console.log(fruits[1]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/* --------------------------------------------------------- */

// Data Type - Tuple

let Id: number = 1;
let instructorName: string = "Berat";

let instructor: [number, string] = [1, "Berat"];

let user: [number, string, boolean, number, string];
user = [1, "Berat", true, 25, "Admin"];

console.log(instructor, user);

let employee: [number, string][];
employee = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];

console.log(employee);

/* --------------------------------------------------------- */

// Data Type - Object

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

let instructor2: Person;
instructor2 = {
  firstName: "Berat",
  lastName: "Uçar",
  age: 25,
  jobTitle: "Software Instructor",
};

console.log(instructor2, instructor2.age, instructor2.lastName);

let person: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "Berat",
  lastName: "Uçar",
  age: 25,
  jobTitle: "Software Instructor",
};

console.log(person, person.firstName);

/* --------------------------------------------------------- */

// Data Type - Enum

enum Media {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book,
}

// normalde 0'dan başlar ama başlangıç değeri vererek değiştirebiliriz.

console.log(Media.Magazine);
console.log(Media[3]);

enum PrintMedia {
  Newspaper = "NEWSPAPER",
  Newsletter = "NEWSLETTER",
  Magazine = "MAGAZINE",
  Book = "BOOK",
}

console.log(PrintMedia.Newsletter);
console.log(PrintMedia["Newspaper"]);

enum Ebatlar {
  small,
  medium,
  large,
}
console.log(Ebatlar);

/* --------------------------------------------------------- */

// Data Type - Union

let code: string | number | boolean = 123;

console.log(code);

/* --------------------------------------------------------- */

// Data Type - Any

let someThing: any = "Hello";
someThing = 25;
someThing = true;
someThing = {
  firstName: "Berat",
  lastName: "Uçar",
};

console.log(someThing, someThing.firstName);

let arr2: any[] = ["John", 212, true];

console.log(arr2);

/* --------------------------------------------------------- */

// Data Type - Void

// Fonksiyon geriye değer döndürmüyorsa kullanılır

function sayHello(): void {
  let firstName: string = "Berat";
  console.log("Hi", firstName);
  // return firstName; (yapamazsın)
}

sayHello();

/* --------------------------------------------------------- */

// Data Type - Never

function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

/* throwError("Hata"); */

let something: void = null;
// let nothing: never = null;

// void'e null, undefined atanabilir ama never'a atanamaz, sadece hata mesajı için kullanılır

/* --------------------------------------------------------- */

// Type Inference

let sayac = 0;

console.log(typeof sayac); // Angular'da tip ataması isteniyor ama ts'de atamasan da hata vermez

function increment(counter: number) {
  return counter++;
}

function increment2(counter: number): number {
  return counter++;
}

// ikiside aynı, number döndüreceğini algılıyor

let a = "some text";
let b = 123;
// a = b; (a'nın string, b'nin number olduğunu algıladı hata verdi)

function sum(a: number, b: number) {
  return a + b;
}

let total: number = sum(10, 15);
//let total: string = sum(10, 15); (number geleceğini anladı, string'e atayamazsın hatası verdi)

/* --------------------------------------------------------- */

// Type Assertion

let code2: any = 123;

console.log(typeof code2);

let empCode = <number>code2; // Type Inference yapmasın kendi otomatik atamasın istersem kullanıyorum

console.log(typeof empCode);

interface Employee {
  name: string;
  code: number;
}

let employee2 = <Employee>{};

console.log(typeof employee2);

employee2.name = "Berat";

console.log(employee2);

/* --------------------------------------------------------- */

// If Else Ternary Operator

let x: number = 35;
let y: number = 35;

if (x > y) {
  console.log("x, y'den büyüktür");
} else if (x < y) {
  console.log("x, y'den küçüktür");
} else {
  console.log("x ve y eşittir");
}

x > y
  ? console.log("x, y'den büyüktür")
  : x < y
  ? console.log("x, y'den küçüktür")
  : console.log("x ve y eşittir");

/* --------------------------------------------------------- */

// Switch Case

let day: number = 2;

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
    console.log(
      "Böyle bir gün yok! Lütfen 0 ile 6 arasında bir rakam giriniz."
    );
    break;
}

/* --------------------------------------------------------- */

// For Loop

for (let i = 0; i < 3; i++) {
  console.log("i değerim", i);
}

let arr3 = [10, 20, 30, 40];

for (let item of arr3) {
  console.log(item);
}

let str = "Berat Uçar";

for (let item of str) {
  console.log(item);
}

/* --------------------------------------------------------- */

// While Loop - Do While Loop - Break

let counter = 10;

while (counter < 5) {
  console.log(counter);
  counter++;
  if (counter == 3) break;
}

do {
  console.log(counter);
  counter++;
} while (counter < 5);

/* --------------------------------------------------------- */

// Function

function add(a: number, b: number): number {
  return a + b;
}

let toplam = add(10, 20);

console.log(toplam);

function bastir(): void {
  console.log("Berat Uçar");
  // return "berat"; (yapamazsın)
}

bastir();

function birlestir(ad: string, soyAd: string = "Uçar"): string {
  return ad + " " + soyAd;
}

let degisken = birlestir("Berat");

console.log(degisken);

/* --------------------------------------------------------- */

// Optional Parameters - Arrow Functions

function carpim(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}

let degisken2 = carpim(5, 10);
let degisken3 = carpim(5, 10, 3);

console.log(degisken2, degisken3);

const carpim2 = (a: number, b: number): number => {
  return a * b;
};

let degisken4 = carpim2(4, 5);

console.log(degisken4);

const bastir2 = () => console.log("Berat Uçar");

bastir2();

/* --------------------------------------------------------- */

// Function Overloading

function add2(a: string, b: string): string;
function add2(a: number, b: number): number;

function add2(a: any, b: any): any {
  return a + b;
}

let degisken5 = add2("Berat", " Uçar");
let degisken6 = add2(5, 8);

console.log(degisken5, degisken6);

/* --------------------------------------------------------- */

// Rest Parameters

function toplam2(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

console.log(toplam2(10, 20));

/* --------------------------------------------------------- */

// Class