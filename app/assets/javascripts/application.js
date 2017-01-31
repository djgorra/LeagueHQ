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

        var filter = $(this).val();
        $(".accordion-item .accordion-title").each(function(){
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

            } else {
                $(this).show();
            }
        });
    });
});

//background changer
function backgroundChanger(champ) {
  if (exampleSwitch.checked) {
    $("body").css({"background-image":`url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg)`, "transition":"background-image 0.5s"});
  }
}
