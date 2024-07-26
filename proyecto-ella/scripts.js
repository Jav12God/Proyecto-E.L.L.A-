document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('main section').forEach(section => {
            if (section.id === targetId) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    });
});

document.getElementById('demo-image').addEventListener('click', function() {
    document.body.innerHTML = `
        <img src="objetos/error.png" alt="Error">
    `;
    setTimeout(() => {
        document.body.innerHTML = `
            <header>
                <h1>Proyecto E.L.L.A.</h1>
            </header>
            
            <nav>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#sobre">Sobre Nosotros</a></li>
                    <li><a href="#juego">Sobre el Juego</a></li>
                    <li><a href="#galeria">Galería</a></li>
                    <li><a href="#probar-demo">Probar Demo</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
            
            <main>
                <section id="inicio">
                    <h2>Inicio</h2>
                    <p>¡SOY REAL!</p>
                </section>
                
                <section id="sobre">
                    <h2>Sobre Nosotros</h2>
                    <p>¡SOY REAL!</p>
                </section>
                
                <section id="juego">
                    <h2>Sobre el Juego</h2>
                    <p>¡SOY REAL!</p>
                </section>
                
                <section id="galeria">
                    <h2>Galería</h2>
                    <p>¡SOY REAL!</p>
                </section>
                
                <section id="probar-demo">
                    <h2>Probar Demo</h2>
                    <p>¡SOY REAL!</p>
                </section>
                
                <section id="contacto">
                    <h2>Contacto</h2>
                    <p>¡SOY REAL!</p>
                </section>
            </main>
            
            <footer>
                <p>&copy; 2024 Proyecto E.L.L.A. Todos los derechos reservados.</p>
            </footer>
            
            <script src="scripts.js"></script>
        `;
        let links = document.querySelectorAll('nav ul li a');
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                document.body.innerHTML = `
                    <video controls autoplay>
                        <source src="objetos/ojos.mkv" type="video/mp4">
                        Tu navegador no soporta el elemento de video.
                    </video>
                `;
                document.querySelector('video').addEventListener('ended', function() {
                    window.location.reload();
                });
            });
        });
    }, 3000);
});
