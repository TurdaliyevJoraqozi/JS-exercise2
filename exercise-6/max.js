let s1 = Number(prompt("Birinchi Sonni kiriting"));
let s2 = Number(prompt("Ikkiinchi Sonni kiriting"));
let s3 = Number(prompt("Uchinchi Soni Kiriting:"));
const fun1 = function (a, b, c) {
  if (s1 > s2 && s2 > s3) {
    console.log("Eng Katta son:" + s1);
    if (s3 > s2) {
      console.log("Eng Kichik son:" + s2);
    } else {
      console.log("Eng Kichik son:" + s3);
    }
  } else if (s2 > s3 && s3 > s1) {
    console.log("Eng Katta son:" + s2);

    if (s1 > s2) {
      console.log("Eng Kichik son:" + s2);
    } else {
      console.log("Eng Kichik son:" + s1);
    }
  } else if (s3 > s2 && s2 > s1) {
    console.log("Eng Katta son:" + s3);

    if (s1 > s2) {
      console.log("Eng Kichik son:" + s2);
    } else {
      console.log("Eng Kichik son:" + s1);
    }
  }
};
// fun1(s1, s2, s3);
// const fun1 = function (a, b, c) {
//   if (a > b && b > c ) {
//     console.log("Eng Katta son:" + s1);
//     console.log("Eng Kichik son:" + s3);
//   } else if (b > c && c > a) {
//     console.log("Eng Katta son:" + s2);
//     console.log("Eng Kichik son:" + s1);
//   } else if (c > a && a > b) {
//     console.log("Eng Katta son:" + s3);
//     console.log("Eng Kichik son:" + s2);
//   }
// };
// fun1(s1, s2, s3);
