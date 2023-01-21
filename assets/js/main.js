//Show button if mouse to change display during the mouseover or mouseout 
function showButton(selector) {
  var buyButton = document. querySelector(selector)
  if (buyButton.style.display === "block") {
    buyButton.style.display = "none";
  } else {
    buyButton.style.display = "block";
  }
}

//Modal scripts to show, hide and close when click out of modal (I have defined those names because it could have some Bootstrap class conflict)
function showModal(modalName){
  let modal = document.getElementById(modalName);
  modal.style.display = 'block'
}

function hideModal(modalName){
  let modal = document.getElementById(modalName);
  modal.style.display = 'none'
}

var infoModal = document.getElementById('infoModal');
infoModal.addEventListener('click', function(e) {
  if (e.target == this){
    infoModal.style.display = 'none'
  } 
});

//Thanks again DNC for the challenge! 🔥💪🏻
