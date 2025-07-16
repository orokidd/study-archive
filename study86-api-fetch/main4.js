const location = "jakarta";
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=T9YT437MKSGR5M6BYTE6EFVBH`;

async function getWeather() {
  const result = await fetch(url);
  const readResult = await result.json();
  console.log(readResult)
}

getWeather()