  var pagenav = document.getElementById("page-nav");

  // When the user scrolls down 20px from the top of the document, show thpagenav
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      pagenav.style.display = "none";
    } else {
      pagenav.style.display = "block";
    }
  }

  // When the user clicks on thpagenav, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
