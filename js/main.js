const validateBtn = document.querySelector(".signin-btn");
const inputField = document.querySelector(".email-input");
const popupText = document.querySelector(".warning-text");



function ValidateEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputField.value.match(mailformat)) {
    console.log("done validating");
    popupText.classList.remove("active");
    return true;
  } else {
    console.log("not validated");
    popupText.classList.add("active");
    return false;
  }
}

validateBtn.addEventListener("click", ValidateEmail);

