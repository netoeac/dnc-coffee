function showButton(selector) {
  var buyButton = document. querySelector(selector)
  //var x = document.getElementById("button-div");
  if (buyButton.style.display === "block") {
    buyButton.style.display = "none";
  } else {
    buyButton.style.display = "block";
  }
}
