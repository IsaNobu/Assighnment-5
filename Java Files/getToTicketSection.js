document.getElementById("buyNow-ticket").addEventListener("click", function () {
  const getSection = document.getElementById("ticket-section");
  if (getSection) {
    getSection.scrollIntoView({
      behavior: "smooth",
    });
  }
});
