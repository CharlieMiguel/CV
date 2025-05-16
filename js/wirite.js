const name = "Web Developer";
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenTyping = 1000; 
const pauseBetweenDeleting = 1000;
let i = 0;
let isDeleting = false;

function typewriter() {
    const element = document.getElementById("typed-name");
    const currentText = element.innerHTML;
    
    if (!isDeleting && i < name.length) {
        
        element.innerHTML += name.charAt(i);
        i++;
        setTimeout(typewriter, typingSpeed);
    } else if (isDeleting && currentText.length > 0) {
        
        element.innerHTML = currentText.substring(0, currentText.length - 1);
        setTimeout(typewriter, deletingSpeed);
    } else {
        
        isDeleting = !isDeleting;
        if (!isDeleting) i = 0; 
        
        
        const pauseDuration = isDeleting ? pauseBetweenTyping : pauseBetweenDeleting;
        setTimeout(typewriter, pauseDuration);
    }
}

window.onload = typewriter;