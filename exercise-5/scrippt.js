let del1 = Number(prompt("Delfinlarni birinchi ballini kiriting"));
let del2 = Number(prompt("Delfinlarniikkinchi ballini kiriting"));
let del3 = Number(prompt("Delfinlarni uchinchi ballini kiriting"));
let ku1 = Number(prompt("Kualalarni biribchi ballini kiriting"));
let ku2 = Number(prompt("Kualalarni ikkinchi ballini kiriting"));
let ku3 = Number(prompt("Kualalarni uchinchi ballini kiriting"));
const calcAverage = function (a, b, c) {
  let s = Math.floor((a + b + c) / 3);
  console.log("Delfinlarni ortacha bali:" + s);
  return (s = Math.floor(a + b + c));
};

const calcAverage2 = function (a, b, c) {
  let s2 = Math.floor(a + b + c);
  console.log("Kualalarni ortacha bali:" + s2);
  return (s2 = Math.floor(a + b + c));
};

let c1 = calcAverage(del1, del2, del3);
let c2 = calcAverage(ku1, ku2, ku3);

let checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins > 2 * avgKoalas) {
    console.log(`Delfinlar g'alaba qozonadi (${avgDolhins} va ${avgKoalas})`);
  } else if (avgDolhins * 2 < avgKoalas) {
    console.log(`Kualalar g'alaba qozonadi (${avgKoalas} va ${avgDolhins})`);
  } else {
    console.log("Hech kim g’alaba qozonmadi");
  }
  return "MagicSoft Games";
};
console.log(checkWinner(c1, c2));
