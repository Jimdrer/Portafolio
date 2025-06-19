// Menú responsive
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Sistema de pestañas del menú
const tabBtns = document.querySelectorAll('.tab-btn');
const menuItemsContainer = document.querySelector('.menu-items');

// Datos del menú (puedes reemplazar con datos reales o cargarlos desde una API)
const menuData = {
    entradas: [
        {
            name: "Empanadas criollas",
            description: "Rellenas con carne cortada a cuchillo, huevo y aceitunas",
            price: "$1,200",
            img: "empanadas.jpg"
        },
        // Más entradas...
    ],
    principales: [
        {
            name: "Lomo al malbec",
            description: "Corte premium con reducción de malbec y guarnición",
            price: "$3,200",
            img: "lomo.jpg"
        },
        // Más platos principales...
    ],
    // Más categorías...
};

// Función para cargar ítems del menú
function loadMenuItems(category) {
    menuItemsContainer.innerHTML = '';
    
    menuData[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="menu-item-img">
            <div class="menu-item-content">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <span class="menu-item-price">${item.price}</span>
            </div>
        `;
        menuItemsContainer.appendChild(menuItem);
    });
}

// Cargar entradas por defecto
loadMenuItems('entradas');

// Event listeners para las pestañas
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos los botones
        tabBtns.forEach(btn => btn.classList.remove('active'));
        // Añadir clase active al botón clickeado
        btn.classList.add('active');
        // Cargar los ítems correspondientes
        const category = btn.getAttribute('data-category');
        loadMenuItems(category);
    });
});

// Formulario de reserva
const reservaForm = document.getElementById('form-reserva');

reservaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aquí puedes añadir lógica para enviar los datos a tu backend
    // Por ahora solo mostraremos una alerta
    alert('¡Reserva enviada con éxito! Nos contactaremos para confirmar.');
    reservaForm.reset();
});

// Smooth scrolling para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Cerrar el menú móvil si está abierto
            navLinks.classList.remove('active');
        }
    });
});