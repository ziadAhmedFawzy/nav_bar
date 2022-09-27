// get elements

let list = document.getElementById("list");

let navBar = document.getElementById("navBar");

let list_section = document.getElementById("list_section");

let close1 = document.getElementById("close");

navBar.addEventListener("click" , function() {
    list_section.classList.remove('hide');
    list_section.classList.add('show');
})

close1.addEventListener('click' , function() {
    list_section.classList.remove('show');
    list_section.classList.add('hide');
})