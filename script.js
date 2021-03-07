document.getElementById("myInput").onsearch = function() {myFunction()};

function myFunction() {
  var x = document.getElementById("myInput");
  document.getElementById("demo").innerHTML = "You are searching for: " + x.value;
}
