$(document).ready(function() {
  $('body').bind('cut copy', function(e) {
        e.preventDefault();
     });
 });
$(document).ready(function() {
    $("body").on("contextmenu", function(e) {
        return false;
    });
});
 //<![CDATA[
  function darkMode(){localStorage.setItem("mode","darkmode"===localStorage.getItem("mode")?"light":"darkmode"),"darkmode"===localStorage.getItem("mode")?document.querySelector("#mainContent").classList.add("dark-mode"):document.querySelector("#mainContent").classList.remove("dark-mode")};
          (localStorage.getItem('mode')) === 'darkmode' ? document.querySelector('#mainContent').classList.add('dark-mode') : document.querySelector('#mainContent').classList.remove('dark-mode') 
 //]]>
