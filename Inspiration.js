let x = function () {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let quote = data[Math.floor(Math.random() * 1643)]["text"];
      console.log(quote);
      document.getElementById("quotes").innerHTML = quote;
    });
};

document.getElementById("btn").onclick = function () {
  // let quotesDiv = document.getElementById("quotes");
  x();
};
document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
      x();
  }
});
