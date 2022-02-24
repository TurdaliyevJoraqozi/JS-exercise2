let son1 = Number(prompt("Birinchi Sonni kiriting"));
let son2 = Number(prompt("Ikkiinchi Sonni kiriting"));
let amal = prompt("Amal Kiriting (Misol uchun: +,-,*,/");
let plus = Number(son1 + son2);
let minus = Number(son1 - son2);
let kop = Number(son1 * son2);
let bol = Number(son1 / son2);
switch (amal) {
  case "+":
    console.log("Natija:  " + plus + ".");
    break;
  case "-":
    console.log("Natija:  " + minus + ".");
    break;
  case "*":
    console.log("Natija:  " + kop + ".");
    break;
  case "/":
    console.log("Natija:  " + bol + ".");
    break;

  default:
    console.log("Bunday amal yoq qayta urining!");
    break;
}
