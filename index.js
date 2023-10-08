// if, else, nested if
console.log("[#]if, else, nested if");

let bmi = 4;
if (bmi < 18.5) {
  console.log("Berat badan Anda kurang");
} else if (bmi <= 24.9) {
  console.log("Berat badan Anda ideal");
} else if (bmi <= 29.9) {
  console.log("Berat badan Anda berlebih");
} else {
  console.log("Anda obesitas");
}
console.log();

// switch case
console.log("[#]switch case");

let kelompok = "aves";
switch (kelompok) {
  case "pisces":
    console.log("Contoh hewan vertebrata kelompok pisces adalah ikan mas, ikan bandeng, dan ikan kakap");
    break;
  case "amphibia":
    console.log("Contoh hewan vertebrata kelompok amphibia adalah katak");
    break;
  case "reptilia":
    console.log("Contoh hewan vertebrata kelompok reptilia adalah ular, buaya, dan kadal");
    break;
  case "aves":
    console.log("Contoh hewan vertebrata kelompok aves adalah ayam, merpati, dan burung");
    break;
  case "mamalia":
    console.log("Contoh hewan vertebrata kelompok pisces adalah kuda, jerapah, dan sapi");
    break;
  default:
    console.log(`"${kelompok}" tidak termasuk ke dalam kelompok hewan vertebrata`);
}
console.log();

// for statement
console.log("[#]for statement");

console.log("Bilangan kelipatan 3 yang kurang dari 100 dan termasuk bilangan genap adalah:");
for (let i = 3; i < 100; i += 3) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}
console.log();

// while, do while 
console.log("[#]while, do while");

let i = 0;
let hasil = 0;
while (i < 10) {
  hasil += 3 * 2 ** i;
  i++;
}
console.log("Jumlah 10 suku pertama deret geometri dengan suku pertama 3 dan rasio 2 adalah", hasil);

let num = 5;
hasil = 1;
do {
  if (num === 0) {
    break;
  }
  hasil *= num;
  num--;
} while (num > 0);
console.log("Nilai dari 5! adalah", hasil);
console.log();

// function
console.log("[#]function");

function luasSegitiga(alas, tinggi) {
  let luas = alas * tinggi / 2;
  return luas;
}
let luas = luasSegitiga(4, 3);
console.log("Luas segitiga dengan alas 4 satuan dan tinggi 3 satuan adalah", luas, "satuan");