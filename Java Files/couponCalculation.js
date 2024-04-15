function calculate(value) {
  const savedUpMoney = getTotalPrice.innerText * value;
  const subtractFromTotal = getTotalPrice.innerText - parseInt(savedUpMoney);
  getGrandTotalPrice.innerText = subtractFromTotal;

  return subtractFromTotal;
}

getCouponInput.addEventListener("input", function () {
  if (
    (getCouponInput.value === "NEW15" ||
      getCouponInput.value === "Couple 20") &&
    parseInt(getTotalPrice.innerText) !== 0
  ) {
    getCouponButton.classList.add("bg-green-500");
    getCouponButton.addEventListener("click", function () {
      if (parseInt(getTotalPrice.innerText) === 2200) {
        if (getCouponInput.value === "NEW15") {
          calculate(0.15);

          getCouponField.classList.add("hidden");

          getDiscountAmount.classList.remove("hidden");
          getDiscount.innerText = "330";
        } else if (getCouponInput.value === "Couple 20") {
          calculate(0.2);

          getCouponField.classList.add("hidden");

          getDiscountAmount.classList.remove("hidden");
          getDiscount.innerText = "440";
        } else {
          getCouponButton.classList.remove("bg-green-500");

          getCouponError.classList.remove("hidden");
        }
      } else {
        getCouponButton.classList.remove("bg-green-500");
        alert("In order to use coupon you'll have to buy at least four ticket");
      }
    });
  } else if (
    !getCouponInput.value === "NEW15" ||
    !getCouponInput.value === "Couple 20" ||
    !parseInt(getTotalPrice.innerText) !== 0
  ) {
    getCouponButton.addEventListener("click", function () {
      getCouponError.classList.remove("hidden");
    });
    getCouponButton.classList.remove("bg-green-500");
  } else {
    getCouponButton.classList.remove("bg-green-500");
  }
});

getCouponErrorButton.addEventListener("click", function () {
  getCouponError.classList.add("hidden");
  getCouponInput.value = "";
});
