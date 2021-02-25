
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log("hem entrat a la funcio del menu");

  window.onclick = function(event) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

}

// Close the dropdown if the user clicks outside of it
