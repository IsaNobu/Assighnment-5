function isNumber(value) {
  if (value.length !== 11) return false;
  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }
  return true;
}

getPhoneNumInput.addEventListener("input", function () {
  if (
    isNumber(getPhoneNumInput.value) === true &&
    getGrandTotalPrice.innerText !== "0"
  ) {
    getConfirmationButton.classList.add("bg-green-600");
    getConfirmationButton.disabled = false;
  } else {
    getConfirmationButton.disabled = true;
    getConfirmationButton.classList.remove("bg-green-600");
  }
});

getContinueButton.addEventListener("click", function () {
  location.reload();
});
