
// Selección de elementos del DOM para manejar las interacciones de usuario
const btnMenu = document.querySelector('.menu button'); // Botón para abrir el menú
const btnRecipes = document.querySelector('.recipes button'); // Botón para abrir la sección de recetas
const btnFind = document.querySelector('.find button'); // Botón para abrir la sección de "Encuéntranos"
const aRecipes = document.querySelector('.recipes a'); // Enlace dentro de la sección de recetas
const divRecipes = document.querySelector('.recipes'); // Div que contiene las recetas
const main = document.querySelector('.main'); // Elemento principal donde se insertarán componentes dinámicos

/**
 * Función para manejar el despliegue del video de YouTube y el botón de cierre.
 * - Crea un video incrustado y un botón de cierre.
 * - Ajusta el tamaño de la sección de recetas.
 * - Agrega la lógica para cerrar el video y restaurar la sección.
 */
const handleMenu = () => {
    // Crear elementos de video y botón de cierre
    const movie = document.createElement('lite-youtube'); // Elemento de video de YouTube
    const buttonX = document.createElement('button'); // Botón para cerrar el video
    const element = main.children[2]; // Referencia al tercer hijo de 'main'

    // Configurar el botón de cierre
    buttonX.textContent = 'x'; // Texto del botón de cierre

    // Configurar el video de YouTube
    movie.setAttribute('videoId', 'Uq1cblLiodk'); // ID del video de YouTube
    movie.setAttribute('params', 'autoplay=0&controls=1'); // Parámetros del video
    movie.classList.add('video-YouTube'); // Agregar clase CSS para el video
    divRecipes.style.height = '170px'; // Ajustar altura de la sección de recetas
    aRecipes.appendChild(movie); // Insertar el video dentro del enlace de recetas

    // Insertar y configurar el botón de cierre
    buttonX.classList.add('buttonX'); // Clase CSS para el botón de cierre
    main.insertBefore(buttonX, element); // Insertar el botón antes del tercer hijo de 'main'

    // Remover evento de clic para evitar múltiples aperturas de video
    if (divRecipes.style.height === '170px') {
        aRecipes.removeEventListener('click', handleMenu);
    }

    // Evento para cerrar el video y restaurar la sección
    buttonX.addEventListener('click', () => {
        buttonX.remove(); // Remover botón de cierre
        movie.remove(); // Remover el video
        divRecipes.style.height = '64px'; // Restaurar altura de la sección de recetas
        aRecipes.addEventListener('click', handleMenu); // Volver a agregar el evento de clic
    });
};

// Agregar evento de clic al enlace de recetas para abrir el video
aRecipes.addEventListener('click', handleMenu);

// Selección de elementos para manejar la visualización de secciones con swipes
const container = document.querySelector('.container');// Contenedor principal para las secciones

// Menú
const sectionMenu = document.querySelector('.section__Menu'); // Sección de menú
const btnCloseMenu = document.querySelector('.close__Icon__Menu'); // Botón para cerrar el menú

// Recetas
const sectionRecipes = document.querySelector('.section__Recipes'); // Sección de recetas
const btnCloseRecipes = document.querySelector('.close__Icon__Recipes'); // Botón para cerrar la sección de recetas

// Encuéntranos
const sectionFindUs = document.querySelector('.section__FindUs'); // Sección de "Encuéntranos"
const btnCloseFindUs = document.querySelector('.close__Icon__FindUs'); // Botón para cerrar la sección de "Encuéntranos"

// Eventos para abrir y cerrar el Menú
btnMenu.addEventListener('click', () => {
    sectionMenu.style.display = 'flex'; // Mostrar el menú
    container.classList.add('active'); // Agregar clase para activar efectos en el contenedor
});

btnCloseMenu.addEventListener('click', () => {
    sectionMenu.style.display = 'none'; // Ocultar el menú
    container.classList.remove('active'); // Remover clase de efectos
});

// Eventos para abrir y cerrar la sección de Recetas
btnRecipes.addEventListener('click', () => {
    sectionRecipes.style.display = 'flex'; // Mostrar la sección de recetas
    container.classList.add('active'); // Activar efectos en el contenedor
});

btnCloseRecipes.addEventListener('click', () => {
    sectionRecipes.style.display = 'none'; // Ocultar la sección de recetas
    container.classList.remove('active'); // Remover efectos en el contenedor
});

// Eventos para abrir y cerrar la sección de "Encuéntranos"
btnFind.addEventListener('click', () => {
    sectionFindUs.style.display = 'flex'; // Mostrar la sección de "Encuéntranos"
    container.classList.add('active'); // Activar efectos en el contenedor
});

btnCloseFindUs.addEventListener('click', () => {
    sectionFindUs.style.display = 'none'; // Ocultar la sección de "Encuéntranos"
    container.classList.remove('active'); // Remover efectos en el contenedor
});

/**
 * Función para actualizar el ancho de las listas de redes sociales en cada sección.
 * - Calcula el ancho basado en el ancho de la ventana.
 * - Aplica el nuevo ancho a las listas de redes sociales en el menú, recetas y "Encuéntranos".
 */
const updateWidth = () => {
    const widthUlElementMenu = document.querySelector('.redes__Menu ul'); // Lista de redes en el menú
    const widthUlElementRecipes = document.querySelector('.redes__Recipes ul'); // Lista de redes en recetas
    const widthUlElementFindUs = document.querySelector('.redes__FindUs ul'); // Lista de redes en "Encuéntranos"
    const viewportWidth = window.innerWidth; // Ancho actual de la ventana
    const newWidth = viewportWidth - 56; // Calcular el nuevo ancho restando 56 px
    widthUlElementMenu.style.width = `${newWidth}px`; // Asignar nuevo ancho en menú
    widthUlElementRecipes.style.width = `${newWidth}px`; // Asignar nuevo ancho en recetas
    widthUlElementFindUs.style.width = `${newWidth}px`; // Asignar nuevo ancho en "Encuéntranos"
};

// Agregar evento de redimensionamiento de ventana para ajustar el ancho dinámicamente
window.addEventListener('resize', updateWidth);
updateWidth(); // Llamada inicial para configurar el ancho al cargar la página
