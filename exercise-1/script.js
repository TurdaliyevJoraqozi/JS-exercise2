let son = Number(prompt("Son  kiriting:"));
let elNatija = document.querySelector(".natija");

if (son % 2 === 1) {
  elNatija.textContent =
    "Siz  sonini  " + son + " kiritdingiz va bu son toq son";
} else {
  elNatija.textContent =
    "Siz  sonini  " + son + " kiritdingiz va bu son juft son";
}
