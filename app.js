// 1-misol      Elementlar yig'indisini hisoblash: Massivdagi barcha elementlar yig'indisini hisoblang.

// let son = +prompt("nechta son kiritmoqchisiz");
// let arr = [];
// let sum = 0;
// for (let i = 0; i < son; i++) {
//   let son1 = +prompt(`${i + 1}-sonni kiritmoqchisiz`);
//   arr.push(son1);
//   sum = sum + son1;
// }

// alert(`umumiy yig'indi ${sum}`);

// 1-misol tugadi

// 2-misol     Eng katta elementni toping: Berilgan massivdagi eng katta elementni qaytaring.

// let son = +prompt("nechta son kiritmoqchisiz");
// let arr = [];
// for (let i = 0; i < son; i++) {
//     let son1 = +prompt(`${i + 1}-sonni kiritmoqchisiz`);
//     arr.push(son1);
// }
// let kattaSon = Math.max(...arr);
// alert(`tartib bilan yozilgan kod ${arr.sort((a, b) => a - b)}`);
// alert(`katta son ${kattaSon}`);

// 2-misol tugadi

// 3-misol      Eng kichik elementni massivdan o'chirish: Eng katta elementni massivdan o'chiring.

// let son = +prompt("nechta son kiritmoqchisiz");
// let arr = [];
// for (let i = 0; i < son; i++) {
//   let son1 = +prompt(`${i + 1}-sonni kiriting`);
//   arr.push(son1);
// }
// let kattaSon = Math.max(...arr);
// let kichikSon = Math.min(...arr);
// arr.pop(kattaSon);
// arr.shift(kichikSon);

// alert(`olib tashlangan katta son "${kattaSon}": okni bosing`);
// alert(`olib tashlangan kichik son "${kichikSon}": okni bosing`);
// alert(`qolgan sonlar ${arr.sort((a, b) => b - a)}`);

// 3-misol tugadi

// 4-misol      Eng uzun so'zni toping: Berilgan jumladagi eng uzun so'zni toping.

// let soz = +prompt("nechta soz kiritmoqchisiz");
// let uzunSoz = "";
// for (let i = 0; i < soz; i++) {
//     let boshqaSoz = prompt(`${i + 1}-sozni kiriting`);
//     if (uzunSoz.length < boshqaSoz.length) {
//         uzunSoz = boshqaSoz;
//     }
// }
// alert(`eng uzun soz " ${uzunSoz} "`);

// 4-misol tugadi`

// 5-misol      Berilgan so'z necha marta uchraganligini aniqlash: Matnda berilgan so'z nechta marta uchraganini aniqlang.

let soz = prompt("biror bir so'z kiriting");
let necha = prompt("qaysi so'zning necha marta uchraganini bilmoqchisiz");
let = soni = 0;
let soz1 = soz.split(" ");
for (let i = 0; soz1.length > i; i++) {
  if (soz1[i] === necha) {
    soni++;
  }
}
alert(`""${necha}" so'z ${soni} marta uchrayapti`);
