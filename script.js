//ARRAY

// ** .push()
// **** var olan bir diziye yeni bir eleman eklememizi sağlıyor eklemek istediğimiz elemanı parantez içerisine yazıyoruz

let alisverisListem = ["elma","ekmek","süt"];

alisverisListem.push("yumurta");



// ** .pop()
// **** var olan dizideki en son elemanı silmemizi sağlar

alisverisListem.pop();

// ** .includes()
// **** bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder.Boolean olarak çıktı alınır

let elmaVar = alisverisListem.includes("elma");
console.log(elmaVar);

// ** .slice()
// **** bir dizinin bir kısmının kopyasıyla yeni bir dizi oluşturmamıza olanak sağlıyor.

let yeniAlisverisListem = alisverisListem.slice(0,2);
console.log(yeniAlisverisListem);

// ** .join()
// **** Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.

let stringAlisverisListem = alisverisListem.join();
console.log(stringAlisverisListem); 

console.log(alisverisListem);