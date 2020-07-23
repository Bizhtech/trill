/* Add shadow to the bottom of navbar on scroll and remove when page is scrolled to the top */
window.onscroll = function(){addShadow()};
function addShadow(){
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("topnav").classList.add('navbar-shadow');
    document.getElementById("topnav").style.paddingTop="0px";
    document.getElementById("topnav").style.paddingBottom="0px";
  } else {
    document.getElementById("topnav").classList.remove('navbar-shadow');
    document.getElementById("topnav").style.paddingTop="0.5rem";
    document.getElementById("topnav").style.paddingBottom="0.5rem";
  }
}
