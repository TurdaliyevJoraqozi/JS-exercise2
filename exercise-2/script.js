let son = prompt("shaxsingizni kiriting:");
let elNatija = document.querySelector(".natija");

if (son === "user") {
  let userParol = prompt("user parolingizni kiriting:");
  if (userParol === "user") {
    elNatija.textContent =
      "Tabriklaymiz siz tizimga oddiy user bulib kiridingiz";
  } else {
    elNatija.textContent = "siz parolni xato kiritdingiz";
  }
} else if (son === "admin") {
  let userParol = prompt("admin parolingizni kiriting:");
  if (userParol === "admin") {
    elNatija.textContent =
      "Tabriklaymiz siz tizimga oddiy admin bulib kiridingiz";
  } else {
    elNatija.textContent = "siz parolni xato kiritdingiz";
  }
} else {
  elNatija.textContent = "Siz bu yerda begonasiz  bu saytni tark eting";
}
