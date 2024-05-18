//Get the button
let mybutton = document.getElementById("back-top");
let menu = document.getElementById("menu");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 ||document.documentElement.scrollTop > 300) {
        menu.classList.add("fixed", "w-full", "top-0", "py-6", "bg-black", "z-50");
        
        mybutton.classList.remove("opacity-0");
        mybutton.classList.add("opacity-1");
    } else {
        menu.classList.remove("fixed", "w-full", "top-0", "py-6", "bg-black", "z-50");
        
        mybutton.classList.remove("opacity-1");
        mybutton.classList.add("opacity-0");
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}