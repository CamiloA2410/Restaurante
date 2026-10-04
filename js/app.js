
// ======================================================= 
// RETO 1: MODO OSCURO INTERACTIVO 
// ======================================================= 

// 1. SELECCIÓN DE ELEMENTOS DEL DOM 
// getElementById busca un elemento por su ID y Le pasamos 'btn-toggle-tema' porque es el ID del botón que queremos seleccionar 
 const btnTema = document.getElementById('btn-toggle-tema'); 

//document.body selecciona directamente el cuerpo de la página HTML, permitiendo aplicar cambios a la página. 
const body = document.body; 

// 2. MANEJO DE EVENTOS 
// Este evento detecta cuando el usuario hace clic en un elemento y La función anónima indica qué acción se ejecuta 
btnTema.addEventListener('click', function() { 

// classList.toggle agrega la clase si no existe y la elimina si ya existe.
body.classList.toggle('tema-oscuro'); 

// Cambiar el texto del botón dependiendo del estado 
if (body.classList.contains('tema-oscuro')) { 
btnTema.textContent = "☀️ Modo Claro"; 
} else { 
btnTema.textContent = "�� Modo Oscuro"; 
} 
}); 


// ======================================================= 
// RETO 2: SALUDO DINÁMICO 
// ======================================================= 

// 1. SELECCIÓN DEL CONTENEDOR
const textoSaludo = document.getElementById('saludo-tiempo-real'); 

// 2. LÓGICA DE TIEMPO 
const fechaActual = new Date(); 
const horaActual = fechaActual.getHours(); 
let mensaje = ""; 

if (horaActual >= 6 && horaActual < 12) { 
mensaje = "¡Buenos días! Espero que tengas una excelente mañana."; 
} else if (horaActual >= 12 && horaActual < 18) { 
mensaje = "¡Buenas tardes! Gracias por visitar mi perfil."; 
} else { 
mensaje = "¡Buenas noches! Descubre nuestro restaurante."; 
} 

// 3. INYECCIÓN EN EL DOM[cite: 2] 
// textContent es para texto si pones una etiqueta la pone tal cual 
// innerHTML Se puede poner etiquetas y el navegador cambia el diseño
textoSaludo.textContent = mensaje; 
