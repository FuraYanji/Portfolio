/* a javascript function for pop up notification*/
function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  var y = document.forms["myForm"]["number"].value;
  var z = document.forms["myForm"]["email"].value;
  var a = document.forms["myForm"]["message"].value;
  if (x == "" || y == "" || z == "" || a == "") {
    alert("Please fill the every detail.");
  }
  else  {
    alert("Thank you for contacting us.");
  }
}
