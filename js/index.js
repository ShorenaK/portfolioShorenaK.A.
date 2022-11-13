const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
});


navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})


// typing animation

const typed = new Typed(".section__subtitle", {
    strings:[ "", "Software Engineer 📲🛑", "Full Stack Developer 💻", "MERN Stack Dev ✅", "Django/Python 🖥🌐✅" ], 
    typeSpeed:100, 
    BackSpeed:60,
    loop:true
})

