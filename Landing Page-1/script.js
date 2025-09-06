const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click" , (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line" : "ri-menu-line")
})


navLinks.addEventListener("click" , (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class" , "ri-menu-line");
})


const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_img img" , {
    ...ScrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_container h1" , {
    ...ScrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header_container p" , {
    ...ScrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".header_container form" , {
    ...ScrollRevealOption,
     delay:1500,
});

// ScrollReveal().reveal(".header_container .bar" , {
//     ...ScrollRevealOption,
//     delay:2000,
// });

ScrollReveal().reveal(".header_card" , {
   duration: 1000,
   interval: 500,
   delay: 2500,
});