        //about texto 
        const elemento = document.querySelector('.tx-ab');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                elemento.style.transform = entry.isIntersecting ? 'scale(1)' : 'scale(0)';
            });
        }, {threshold: 0.1});
        observer.observe(document.getElementById('about'));

        //about foto
                document.addEventListener('DOMContentLoaded', function() {
            const elemento = document.querySelector('.abimg');
            const seccion = document.getElementById('about');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        
                        elemento.classList.add('visible');
                    } else {
                        
                        elemento.classList.remove('visible');
                    }
                });
            }, {
                threshold: 0.2, 
                rootMargin: '0px 0px -50px 0px' 
            });
            
            observer.observe(seccion);
        });

        //proyects cartas
        document.addEventListener('DOMContentLoaded', function() {
           
            const todasLasCards = document.querySelectorAll('.card');
            
            
            const observador = new IntersectionObserver((entradas) => {
                entradas.forEach(entrada => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add('visible');
                    } else {
                        entrada.target.classList.remove('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

           
            todasLasCards.forEach(card => {
                observador.observe(card);
            });
        });