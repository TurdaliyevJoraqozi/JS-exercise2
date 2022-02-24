let s1 = Number(prompt("Birinchi sonni kiriting"));
let s2 = Number(prompt("Ikkinchi sonni kiriting"));
let fun1 = function (a, b) {
  let s3 = b;
  b = a;
  a = s3;
  console.log("Birinchi Son: " + a, "  ikkinchi Son: " + b);
};
fun1(s1, s2);
