/* TypeScript'de Tip Nedir?

TypeScript'de tip, bir değerin sahip olduğu farklı özellik ve metodlara başvurmanın doğru bir yoludur.

Mesala string olan bir veri türümüz varsa bu değer string'in sahip olduğunu özellik ve metodlara sahiptir. Örn: length toLowerCase() gibi. Diziler için kullanabilecegimiz metoları(pop,push, map,filter) bir stringde kullanamayız. Tiplere özel metodlar ve özelliklere erişebiliyoruz. Bir değerinn neyi temsil ettiğini anlamanın en kısa yolu ona bir tip tanımlamaktır. Typescript sayesinde biz bu işlemi yapabiliyoruz. Javascriptte olan tipleri miras alınır primitive (string,boolean,number,symbo,null,undifined)ve object tipler(nesne, obje, dizi, sınıf).

*/


/* TypeScripte'de Tiplerin Amacı

Tipler, kodlarımızı analiz edip hataları bulmak için TypeScript Compiler tarafından kullanılır.
Tipler, atanan değerlerin değişkenlerle olan ilişkisinin daha kolay anlamamızı sağlar.


TypeScript Tip Örneği

const heading=document.querySelector('h1');
Typescript compiler'ı heading değişkeninin bir HTMLHeadingElement tipinde olduğunu biliyor.
Ve HTMLHeadingElement tipine ait kullanabileceği özellik ve metodları listeliyor. Eğer olmayan bir özellik ya da metoda erişmeye çalışırsak TypeScript compiler'ı hatayı gösterecektir.

*/

// Özelet TypeScriptte her değerin bir tipi vardır. Tip, bir değerin sahip olabileceği özellik ve metodları tanımlayan bir tanımdır. TypeScript Compiler, tipleri kodlarınızı analiz etmek ve hataları bulmak için kullanır.

