const img = document.querySelector("img");
const apiKey = ""

const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse/read the JSON returned from the fetch
  })
  .then((parsed) => {
    img.src = parsed.data.images.original.url;
  })
  .catch((err) => {
    console.log(err);
  });
