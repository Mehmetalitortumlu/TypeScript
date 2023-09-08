// var message: string = "Hello world2";

// const h1=document.createElement('h1');
// h1.textContent=message;

// document.body.appendChild(h1);


// Eğer bu şekilde yapmış olsaydık app.js içinde yatığımız şeyleri typscript bizim için daha kolay hale getircekti.

const reversedText = (text: string) => {
    return text.split('').reverse().join('')
}

// Eğer string yerine number parametresi verirsek typscript bize direk hatayı verir =Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(
    reversedText("Mehmet")
)



// Javascript dinamik tiptedir. Esneklik sağlarken aynı zamanda bir çok soruna sebeb olabilir.
// Typescript javascripte'e tipleri taımlayarak bu sorunları çözmemizi sağlar.
