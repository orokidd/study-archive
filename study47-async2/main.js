// Setting up local web server is required for this to run
//

const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});

async function updateDisplay(verse) {
  try {
    const fetchData = await fetch(verse);
    if (!fetchData.ok) {
      throw new Error(`HTTP error: ${fetchData.status}`);
    }
    const getVerse = await fetchData.text();
    poemDisplay.textContent = getVerse;
  } catch (error) {
    console.error(`an error occured:${error}`);
  }
}
