const views = view();

function view() {
  const text = document.querySelector("h1");
  const text2 = document.querySelector("h2");
  const text3 = document.querySelector("h3");
  const text4 = document.querySelector("h4");

  return { text, text2, text3, text4 }
}

function init() {
  views.text.textContent = "Wallahi";
  views.text2.textContent = "We are";
  views.text3.textContent = "SO";
  views.text4.textContent = "BACK";
}

init();