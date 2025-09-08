const menu_btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const slide = document.querySelectorAll(".slider_btn");
const v_sliders = document.querySelectorAll(".video_slider");
const contents = document.querySelectorAll(".content");




menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("active");
    nav.classList.toggle("active");
});


// for slider 
var slider_nav = function(eve){
    slide.forEach((btn) => {
        btn.classList.remove("active")
    });

    v_sliders.forEach((v_slider) => {
        v_slider.classList.remove("active")
    });

    contents.forEach((content) => {
        content.classList.remove("active")
    });


    slide[eve].classList.add("active"); 
    v_sliders[eve].classList.add("active");
    contents[eve].classList.add("active");
}

slide.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        slider_nav(i);
    });
});

