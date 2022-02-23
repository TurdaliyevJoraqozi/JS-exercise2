let son = Number(prompt("Yoshingizni  kiriting:"));
let elKun = document.querySelector(".kun");
let elSoat = document.querySelector(".soat");
let elMinut = document.querySelector(".minut");
let elSekund = document.querySelector(".sekund");
let kun = son * 365;
let soat = kun * 24;
let minut = soat * 60;
let sekund = minut * 60;
elKun.textContent = "Siz tug`ilganingizga  " + kun + "  " + "  kun bo`ldi";
elSoat.textContent = "Siz tug`ilganingizga  " + soat + "  " + "  soat bo`ldi";
elMinut.textContent =
  "Siz tug`ilganingizga   " + minut + "  " + "  minut bo`ldi";
elSekund.textContent =
  "Siz tug`ilganingizga   " + sekund + "  " + "  sekund bo`ldi";
