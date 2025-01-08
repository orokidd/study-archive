let moneyIDR;
let moneyCurrency = ["dollar", "euro", "yuan"]
let moneyConverted = []

moneyIDR = 60000; //input the ammount in IDR

for (let i = 0; i < moneyCurrency.length; i++) {
  switch (moneyCurrency[i]){
    case "dollar":
      moneyConverted.push(moneyIDR * 0.000062)
      break
    case "euro":
      moneyConverted.push(moneyIDR * 0.000060)
      break
    case "yuan":
      moneyConverted.push(moneyIDR * 0.00045)
      break
    default:
      console.log(`Test`)
  }
}
console.log(moneyConverted)