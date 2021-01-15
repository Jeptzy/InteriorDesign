const burger = document.querySelector('.burger');
const navLink = document.querySelector('.nav_link');
const navItem = document.querySelectorAll('.nav_item');

burger.addEventListener('click', function(){
    navLink.classList.toggle('show_nav')
    burger.classList.toggle('rotateburger')
    // burger.classList.toggle('closeburger')
});

function linkaction(){
    navItem.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    navLink.classList.remove('show_nav');
    burger.classList.remove('rotateburger');

    
    
}
navItem.forEach(n => n.addEventListener('click', linkaction));

function closenav(){
    document.addEventListener('click', function(event) {
        if(event.target.closest('.nav_link'))return
        navLink.classList.remove('show_nav')
        burger.classList.remove('rotateburger');
    }) 
}

   

