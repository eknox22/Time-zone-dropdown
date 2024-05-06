function showSelectedCountry(event) {
  if (event.target.value !== " ") {
    if (event.target.value === "paris") {
      alert("This is Paris");
    }
    if (event.target.value === "toyko") {
      alert("This is Toyko");
    }
    if (event.target.value === "sydney") {
      alert("This is Sydney");
    }
  }
}

let countrySelect = document.querySelector("#timezone");
countrySelect.addEventListener("change", showSelectedCountry);
