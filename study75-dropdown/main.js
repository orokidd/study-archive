const button = document.querySelector(".button");
const dropdown = document.querySelector(".dropdown");

button.addEventListener("click", showDropDown);

function isActive() {
  if (dropdown.classList.contains("active")) {
    return true;
  } else {
    return false;
  }
}

function showDropDown() {
  if (isActive()) {
    dropdown.classList.add("inactive");
    dropdown.classList.remove("active");
  } else {
    dropdown.classList.add("active");
    dropdown.classList.remove("inactive");
  }
}
