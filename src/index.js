function showSelectedCity(event) {
  if (event.target.value) {
    console.log(event.target.value);
    if (event.target.value === "paris") {
      let parisTime = moment()
        .tz("Europe/Paris")
        .format("dddd, MMMM D YYYY HH:mm A");
      alert(`It is ${parisTime} in ${event.target.value}.`);
    } else if (event.target.value === "toyko") {
      let tokyoTime = moment()
        .tz("Asia/Toyko")
        .format("dddd, MMMM D YYYY HH:mm A");
      alert(`It is ${tokyoTime} in ${event.target.value}.`);
    } else if (event.target.value === "sydney") {
      let sydneyTime = moment()
        .tz("Australia/Sydney")
        .format("dddd, MMMM D YYYY HH:mm A");
      alert(`It is ${sydneyTime} in ${event.target.value}.`);
    }
  }
}

let citySelect = document.querySelector("#timezone");
citySelect.addEventListener("change", showSelectedCity);
