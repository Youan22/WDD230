function updatePageRating(value) {
    document.getElementById("page_rating_output").innerHTML = value;
  }
const password = document.getElementById("password")  
const confirm_password = document.getElementById("confirm_password")  
const error_message = document.getElementById("error_message")

confirm_password.addEventListener("focusout", checkPassword)

function checkPassword () {

if ( password.value !== confirm_password.value) {
  error_message.innerHTML = "Wrong password; Try again !"
  password.value ="";
  confirm_password.value="";



}
}