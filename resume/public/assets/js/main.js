window.onload = function(){
    //hide the preloader
    document.querySelector(".preloader").style.display = "none";
}

window.onscroll = function() {
 var navbar = document.getElementById('site_header')
  if (window.pageYOffset > 0) {
    navbar.classList.add('sticked')
  } else {
    navbar.classList.remove('sticked')
  }
}


    