let amountInput = document.getElementById("dollar-input");
let egpPound = document.querySelector(".pound span");
let sarRial = document.querySelector(".rial span");

fetch(
  "https://api.currencyfreaks.com/latest?apikey=780a3a58738241cfa571eeaacd50f76a"
)
  .then((Response) => Response.json())
  .then((result) => {
    amountInput.addEventListener("input", () => {
      let value = amountInput.value;
      let pound = result.rates.EGP;
      let rial = result.rates.SAR;
      egpPound.innerHTML = value * pound;
      sarRial.innerHTML = value * rial;
    });
  });
