function cryss(){
    window.open("https://charliemiguel.github.io/Cryss-Details/", "_blank");
}

function pcpedia(){
    window.open("https://charliemiguel.github.io/PCpedia.com/", "_blank");
}

function botanica(){
    window.open("https://charliemiguel.github.io/La-Botanica/", "_blank");
}

function email(){
    window.open("mailto:charliewebs34@gmail.com", "_blank");
}

//contacto

function ws() {
    const phoneNumber = "18299682961"; 
    const message = "Hola, me interesa crear una pagina web para mi emprendimiento"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

//nav
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav li a:not(.ico)');
    
   
    function checkVisibleSection() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + 100;
            
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
   
    checkVisibleSection();
    window.addEventListener('scroll', checkVisibleSection);
});

//email
