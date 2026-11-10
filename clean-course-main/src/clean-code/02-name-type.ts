(() => {

    // Arreglo de temperaturas en Celsius
    const temperaturasCelsius = [33.6, 12.34];

    // Dirección IP del servidor
    const direccionIpServidor = '123.123.123.123';

    // Listado de usuarios
    const usuarios = [
        { id: 1, email: 'fernando@google.com' },
        { id: 2, email: 'juan@google.com' },
        { id: 3, email: 'melissa@google.com' }
    ];

    // Listado de emails de los usuarios
    const correosUsuarios = usuarios.map(usuario => usuario.email);

    // Variables booleanas de un videojuego
    const personajeSalta = false;
    const personajeCorre = true;
    const inventarioVacio = true;
    const videojuegoCargando = false;

    // Otros ejercicios
    // Tiempo inicial
    const tiempoInicial = new Date().getTime();

    // ... 3 doritos después ...

    // Tiempo transcurrido
    const tiempoTranscurrido = new Date().getTime() - tiempoInicial;

    // Funciones

    // Obtiene los libros
    function obtenerLibros() {
        throw new Error('Function not implemented.');
    }

    // Obtiene libros desde una URL
    function obtenerLibrosDesdeUrl(url: string) {
        throw new Error('Function not implemented.');
    }

    // Obtiene el área de un cuadrado basado en sus lados
    function calcularAreaCuadrado(lado: number) {
        throw new Error('Function not implemented.');
    }

    // Imprime el trabajo si está activo
    function imprimirTrabajoSiEstaActivo() {
        throw new Error('Function not implemented.');
    }

})();
