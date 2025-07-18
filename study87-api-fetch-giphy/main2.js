const img = document.querySelector("img");
const search = "cyberpunk";
const apiKey = ""
const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${search}`;

async function getGif() {
  const result = await fetch(url);
  const readResult = await result.json();
  img.src = readResult.data.images.original.url;
}

getGif()