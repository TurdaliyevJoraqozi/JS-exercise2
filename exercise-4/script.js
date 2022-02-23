let del1 = Number(prompt("Delfinlarni birinchi ballini kiriting"));
let del2 = Number(prompt("Delfinlarniikkinchi ballini kiriting"));
let del3 = Number(prompt("Delfinlarni uchinchi ballini kiriting"));
let ku1 = Number(prompt("Kualalarni biribchi ballini kiriting"));
let ku2 = Number(prompt("Kualalarni ikkinchi ballini kiriting"));
let ku3 = Number(prompt("Kualalarni uchinchi ballini kiriting"));
let bal1 = document.querySelector(".ballar1");
let a = del1 + del2 + del3;
let or1 = a / 3;
let bal2 = document.querySelector(".ballar2");
let b = ku1 + ku2 + ku3;
let or2 = b / 3;
let ortacha1 = document.querySelector(".ortacha1");
let ortacha2 = document.querySelector(".ortacha2");
bal1.textContent = "Delfinlarni Umjumiy Bali:  " + a;
ortacha1.textContent = "Delfinlarni ortacha Bali:  " + or1;
bal2.textContent = "Kualalarni Umjumiy Bali:  " + b;
ortacha2.textContent = "Kualalarni ortacha Bali:  " + or2;
let natija = document.querySelector(".natija");
if (ortacha1 > ortacha2) {
  natija.textContent = "Delfinlar g`olib bo`ldi";
} else {
  natija.textContent = "Kualalar g`olib bo`ldi";
}
