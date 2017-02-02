// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

//foundation
$(function(){ $(document).foundation(); });

//live-search
$(document).ready(function(){
    $("#filter").keyup(function(){
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
        // Loop through the comment list
        $(".accordion-item a").each(function(){
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
    });
});
function backgroundChanger(champ) {
  if (exampleSwitch.checked) {
    var img = new Image();
    img.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`;
    img.onload = function () {
    $("body").css({"background-image":`url(${img.src})`, "transition":"background-image 0.5s"});
    };
  }
}
//"document.body.style.cssText+=';background-image: url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/<%= champ.key %>_0.jpg);transition: background 0.5s linear;-webkit-transition: background 1.0s linear;';"
