var lastScrollTop = 0;
window.addEventListener("scroll", function(){
  //if(window.innerWidth>992){
     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
     if (st > lastScrollTop){
        // downscroll code
        document.getElementById("topnav").style.marginTop="-90px";
      //  document.getElementById("topnav").style.display="none";
     } else {
        // upscroll code
        document.getElementById("topnav").style.marginTop="initial";
        if (window.pageYOffset!==0) {
          if(window.innerWidth>992){
            document.getElementById("topnav").style.backgroundColor="white";
          }
          else {
            document.getElementById("topnav").style.backgroundColor="#e6e6e6";
          }
        }
        else{
          document.getElementById("topnav").style.backgroundColor="transparent";
        }
  //document.getElementById("topnav").style.display="initial";
     }
     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  // }
}, false);
