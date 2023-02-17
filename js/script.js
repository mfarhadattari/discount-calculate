function setTextElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getInputValueById(elementId) {
  const inputField = document.getElementById(elementId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseInt(inputFieldValueString);
  return inputFieldValue;
}

document.getElementById("saving-btn").addEventListener("click", function () {
  const inputPrice = getInputValueById("price-input-field");
  if (isNaN(inputPrice)) {
    alert("Please Input Correct Amount");
    return;
  }
  const promoCode = document.getElementById("promo-code-field").value;
  if (promoCode.toUpperCase() == "DISC30") {
    const savingAmount = inputPrice * (30 / 100);
    setTextElementById("discount-amount", savingAmount.toFixed(2));

    const savingPrice = inputPrice - savingAmount;
    setTextElementById("discount-price", savingPrice);

    const failMessage = document.getElementById("discount-fail-message");
      failMessage.classList.add('hidden');
  } 
  else {
      const savingAmount = 000;
      setTextElementById("discount-amount", savingAmount);
      
      const savingPrice = inputPrice - savingAmount;
      setTextElementById("discount-price", savingPrice);

      const failMessage = document.getElementById("discount-fail-message");
      failMessage.classList.remove('hidden') ;
    }
});
