document.getElementById("buyNow-ticket").addEventListener("click", function () {
  const getSection = document.getElementById("ticket-section");
  console.log("lol");
  if (getSection) {
    getSection.scrollIntoView({
      behavior: "smooth",
    });
  }
});
