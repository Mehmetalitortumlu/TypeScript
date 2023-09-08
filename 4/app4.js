// TypeScript Tip Tanımı
/*
Değişken fonksiyon, nesne gibi tanımlıyacıların tiplerini açıkça belirtmek için tip tanımları yapılır.
TypeScriptte tip tanımı yapmak için : type sytax'ı kullanılır. Burada type herhangi bir geçerli tip olabilir .

Bir kez tip tanımladınğında sadece o tip değerlerle işlem yapılabilir. Eğer farklı tiğte bir değer tanımı yapmaya çalışırsak TypeScript Compiler hata verecektir.
*/
/*
let variableName: type; değişkenini değersiz tip tanımlayarak bırakabilriz
let variableName2:type= value değişkene tip ve değer verebiliriz.
const variableName3:type=values değişkene sabit değer verebiliriz.

Örn olarak
let fullName:string;
fullName="Mehmet Ali" diyebilirim eğer string yerine number veya farklı bir tip tanımlasaydım typescript compiler bana hata vericekti.
let fullName:string;
fullName=15 // hata
console.log(fullName);

Örn2
let active: booelan=true varsayılan olarak bir değer vermemiz gerekiyor çünkü booelan .

*/
/*
Diziler
Bir Dizinin tip tanımını yapmak için :type [] şeklinde köşeli parantez kullanarak yapabiliriz.

let arrayName: string[] = ["a","b",] şeklinde. eğer bu dizinin içinde string haricinde bir değer olsaydı  hata alıcaktık.


Objeler

const user : {
    name:string,
    surname:string,
    age:number
}
bu değere atanan herhangi bir objenin bu formata sahip olması gerekiyor name surname ve age olmak zorunda.

user= {
    name:"mehmet",
    surname:"ali",
    age:30
}

*/
var user;
user = {
    name: "mehmet",
    surname: "ali",
    age: 30
};
console.log(user);
