// prevent from more than four clicks
let clickCount = 0;

// get all the seats and the functionalities

for (const elements of getSeats) {
  elements.addEventListener("click", function (event) {
    const getSeatNumber = getSeatNum.innerText;
    const seatNumberInt = parseInt(getSeatNumber);

    const getSeatNumberLeft = getSeatNumLeft.innerText;
    const seatNumberLeftInt = parseInt(getSeatNumberLeft);

    const createNewDiv = document.createElement("div");
    createNewDiv.classList.add("flex", "justify-around", "mt-4", "text-black");

    const seat = document.createElement("h3");
    seat.innerText = event.target.innerText;

    const class_ = document.createElement("h3");
    class_.innerText = "Economy";

    const price = document.createElement("h3");
    price.innerText = "550";

    createNewDiv.appendChild(seat);
    createNewDiv.appendChild(class_);
    createNewDiv.appendChild(price);

    if (clickCount < 4) {
      // give background color to the selected seat
      event.target.classList.add("bg-lime-500");
      clickCount++;

      // increase the seat number
      getSeatNum.innerText = 1 + seatNumberInt;

      // decrease the seat number
      getSeatNumLeft.innerText = seatNumberLeftInt - 1;

      // add the seat info
      getSeatInfoDiv.appendChild(createNewDiv);

      // get total price of seats
      const getPrice = getTotalPrice.innerText;
      const makePriceInt = parseInt(getPrice);

      getTotalPrice.innerText = makePriceInt + 550;
    } else {
      alert("You can't select more than four seats at a time");
    }
  });
}
