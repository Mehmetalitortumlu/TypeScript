// var message = "Hello world2";
// var h1 = document.createElement('h1');
// h1.textContent = message;
// document.body.appendChild(h1);


// Neden typscript çünkü tip sistemi ekleyerek javascriptteki dinamik tip problemlerinin önüne geçmek ve gelmesi planlanan js özelliklerine daha erken erişebilmek.

// Değişkenin tipini biz belirlemiyoruz değişkenin tipini değeri neyse o belirliyor. mesala let a= "mehmet" olursa string, a=2 olursa number, a=true olursa boelan dinamik bir tipte olduğunu görüyoruz. Bu hem avantaj sağlar hem problem typscript burda tip tanımı yaparak bu problemlerin önüne geçmemizi sağlar.

//  Biz bu şekilde verilerin kontrolünü gerçekleştirebiliyoruz. Ancak typscipt kullanıp biz veri tipinin string olduğunu belirleseydik compile aşamasında biz hata alıp düzeltebilir ve bu kadar işlem yapmayabilirdik.  

/* 
const reversedText = text => {
    if (typeof text !== 'string') {
        throw new Error('hatali bir tip gönderdiniz')
    }
    return text.split('').reverse().join('')
}

try {
    console.log(
        reversedText("mehmet")
    )

} catch (e) {
    console.log(e.message);
}
*/


function getProduct(id) {
    return {
        id,
        name: "Urun #" + id,
        price: 55
    }
};

const product = getProduct(1);
// Burada biz olmayan bir değere ulaştığımız zaman javascript sanki varmış gibi davraniyor ve hata vermiyor geriye undifined dönüyor dolayısıyla typscripte bunun önüne geçilebiliyor. Olmayan şeylere ulaşma kısmında typscripte daha doğru sonuçlar verir. Bir bizim yukarda oluşturdugumuz fonksiyonda id tipi şu name tipi şu ve price tipi şu onun haricinde hiç bir şey döndürmüyor yani biz bu fonksiyonuun bize ne döndürceğini bilyior ona göre hareket ediyoruz.
console.log(product.test);


// Bir başka yapılan hata ise şu bir fonksiyona iki tane parametre geçebiliriz bu parametlerden biri name biri price olsun sırasıyla ama biz ilk price sonra name i geçersek burda hata yapmış olabilriz bu hatanın önüne geçebilmek için typscripte bize hata mesajı verir. biz aşağıda iki parametereyide gönderdik javascript doğru ya da yanlış göndermemizle ya da tanımızsız göndermemizle ilgilenmiyor çünkü biz iki tane parametreyi gönderdik.

function showProductInfo(name, price) {
    return ` urun= ${name}  fiyat=${price}`
}

console.log(
    showProductInfo(product.price, product.name)
) 