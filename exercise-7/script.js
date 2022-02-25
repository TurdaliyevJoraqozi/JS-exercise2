let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let usuluga = [];
let total = [];
function cacl() {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      usuluga[i] = bills[i] - bills[i] * 0.15;

      total.push(usuluga[i]);
    } else if (bills[i] <= 50 || bills[i] >= 300) {
      usuluga[i] = bills[i] - bills[i] * 0.2;

      total.push(usuluga[i]);
    }
  }
}
cacl();
function summ() {
  let s = 0;
  for (let i = 0; i < total.length; i++) {
    s += Math.floor(total[i]);
  }
  console.log(`Uslugalar: `);
  console.log(total);
  console.log("Total Qiymat:  " + s);
}
summ();
