let moneyIDR;
let moneyCurrency;
let moneyConverted;

moneyIDR = 50000; //input the ammount in IDR
moneyCurrency = "euro"; //currency to convert to

switch (moneyCurrency) {
  case "dollar":
    moneyConverted = moneyIDR * 0.000062;
    console.log(`Converted ammount is: $${moneyConverted}`);
    break;
  case "euro":
    moneyConverted = moneyIDR * 0.00006;
    console.log(`Converted ammount is: €${moneyConverted}`);
    break;
  case "yuan":
    moneyConverted = moneyIDR * 0.00045;
    console.log(`Converted ammount is: cn¥${moneyConverted}`);
    break;
  default:
    console.log(`Please input a valid currency`)
}

