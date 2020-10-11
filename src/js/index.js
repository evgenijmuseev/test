document.addEventListener("DOMContentLoaded", function() {

    "use strict";

    const menuBtn = document.querySelector(".menu-btn"),
          menuMobile = document.querySelector(".nav-mobile"),
          counterRoom = document.querySelector(".counter-room"),
          counterBathroom = document.querySelector(".counter-bathroom"),
          minusRoom = document.querySelector(".minus-room"),
          plusRoom = document.querySelector(".plus-room"),
          minusBathroom = document.querySelector(".minus-bathroom"),
          plusBathroom = document.querySelector(".plus-bathroom");

    menuBtn.addEventListener("click", function(e) {
        e.preventDefault();

        menuBtn.classList.toggle("active-menu-btn");
        menuMobile.classList.toggle("active-menu");
    });

    plusRoom.addEventListener("click", function(e) {
        e.preventDefault();
        counterRoom.value = parseInt(counterRoom.value) + 1;
    });

    minusRoom.addEventListener("click", function(e) {
        e.preventDefault();
        counterRoom.value = parseInt(counterRoom.value) - 1;

        if (parseInt(counterRoom.value) <= 1) {
            counterRoom.value = "1";
        }
    });


    plusBathroom.addEventListener("click", function(e) {
        e.preventDefault();
        counterBathroom.value = parseInt(counterBathroom.value) + 1;
    });

    minusBathroom.addEventListener("click", function(e) {
        e.preventDefault();
        counterBathroom.value = parseInt(counterBathroom.value) - 1;

        if (parseInt(counterBathroom.value) <= 1) {
            counterBathroom.value = "1";
        }
    });



});