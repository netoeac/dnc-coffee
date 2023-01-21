function showButton(selector) {
  var buyButton = document. querySelector(selector)
  if (buyButton.style.display === "block") {
    buyButton.style.display = "none";
  } else {
    buyButton.style.display = "block";
  }
}


function showModal(modalName){
  let modal = document.getElementById(modalName);
  modal.style.display = 'block'

}

function hideModal(modalName){
  let modal = document.getElementById(modalName);
  modal.style.display = 'none'
}