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

//scroll reveal
// ScrollReveal().reveal('.headline');
// ScrollReveal().reveal('.home_text', { delay: 500 });
// ScrollReveal().reveal('.home_svg', { delay: 2000 })

// ScrollReveal({ distance: '100px' });
// ScrollReveal().reveal('.home_text', { origin: 'left' , delay: 500});
// ScrollReveal().reveal('.home_svg', { origin: 'right',delay: 500});

// ScrollReveal().reveal('.func_text', { origin: 'right' , delay: 700});
// ScrollReveal().reveal('.collab_text', { origin: 'right',delay: 900});

// ScrollReveal().reveal('.col1', { origin: 'bottom' , delay: 700});
// ScrollReveal().reveal('.col2', { origin: 'bottom',delay: 900});
// ScrollReveal().reveal('.col3', { origin: 'bottom',delay: 1000});

const sr = ScrollReveal({
    
    distance: '80px',
    duration: 2000,
    reset: false
})

sr.reveal('.home_text', { origin: 'left' , delay: 500});
sr.reveal('.home_svg', { origin: 'right',delay: 500});

sr.reveal('.about_svg', { origin: 'left' , delay: 700});
sr.reveal('.func_text', { origin: 'right' , delay: 700});
sr.reveal('.collab_text', { origin: 'right',delay: 900});

sr.reveal('.col1', { origin: 'bottom' , delay: 500});
sr.reveal('.col2', { origin: 'bottom',delay: 700});
sr.reveal('.col3', { origin: 'bottom',delay: 1000});

sr.reveal('.contact_title', {delay: 1000});




