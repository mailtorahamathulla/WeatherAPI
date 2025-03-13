let input = document.getElementById("input");
input.addEventListener("focusout", () => {
  let place = input.value;
  let key = "b4fdc07adec0b87e34aa59680a98dbd4";
  let prom = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`
  );

  prom
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let weather = Math.round(data.main.temp) - 273;
      let input = document.getElementById("setInput");
      input.style.marginTop = "30px";
      input.textContent = `Current weather of ${place} is '${weather}'.`;
    })
    .catch((data) => {
      console.log("please enter a valid location");
    });
});
