var form = document.querySelector("form");
console.log(form)
form.addEventListener("submit", function(event) {
  console.log("Saving value", form.elements.value.value);
  event.preventDefault();
});


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }



  var forLOOP = function(){
      for(var i = 0 ; i >= 10; i++){
          console.log(i)
      }
  }