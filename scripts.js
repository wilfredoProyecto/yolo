const products = [
    // Material de Escritura
    { id: 1, name: "Lapicero Pilot", price: 2, image: "lapicero_pilot.jpg", category: "Material de Escritura", brand: "Pilot" },
    { id: 2, name: "Cuaderno Oxford", price: 5, image: "cuaderno_oxford.jpg", category: "Material de Escritura", brand: "Oxford" },
    { id: 3, name: "Pluma Bic", price: 1, image: "pluma_bic.jpg", category: "Material de Escritura", brand: "Bic" },
    { id: 4, name: "Marcadores Stabilo", price: 6, image: "marcadores_stabilo.jpg", category: "Material de Escritura", brand: "Stabilo" },
    { id: 5, name: "Resaltadores Sharpie", price: 3, image: "resaltadores_sharpie.jpg", category: "Material de Escritura", brand: "Sharpie" },

    // Tecnología
    { id: 6, name: "Laptop HP Pavilion", price: 600, image: "laptop_hp.jpg", category: "Tecnología", brand: "HP" },
    { id: 7, name: "Cargador Anker", price: 20, image: "cargador_anker.jpg", category: "Tecnología", brand: "Anker" },
    { id: 8, name: "Auriculares Bose", price: 150, image: "auriculares_bose.jpg", category: "Tecnología", brand: "Bose" },
    { id: 9, name: "Ratón Logitech", price: 25, image: "raton_logitech.jpg", category: "Tecnología", brand: "Logitech" },
    { id: 10, name: "Mochila para Laptop Samsonite", price: 50, image: "mochila_samsonite.jpg", category: "Tecnología", brand: "Samsonite" },

    // Papelería
    { id: 11, name: "Papel Bond A4", price: 3, image: "papel_bond_a4.jpg", category: "Papelería", brand: "Generic" },
    { id: 12, name: "Carpeta de 3 Anillos", price: 4, image: "carpeta_3_anillos.jpg", category: "Papelería", brand: "Generic" },
    { id: 13, name: "Tijeras Fiskars", price: 7, image: "tijeras_fiskars.jpg", category: "Papelería", brand: "Fiskars" },
    { id: 14, name: "Pegamento UHU", price: 2, image: "pegamento_uhu.jpg", category: "Papelería", brand: "UHU" },
    { id: 15, name: "Post-its 3M", price: 4, image: "postits_3m.jpg", category: "Papelería", brand: "3M" },

    // Organización y Almacenaje
    { id: 16, name: "Organizador de Escritorio", price: 10, image: "organizador_escritorio.jpg", category: "Organización", brand: "Generic" },
    { id: 17, name: "Archivador Vertical", price: 12, image: "archivador_vertical.jpg", category: "Organización", brand: "Generic" },
    { id: 18, name: "Estante para Libros", price: 20, image: "estante_libros.jpg", category: "Organización", brand: "Generic" },
    { id: 19, name: "Carpeta Porta Documentos", price: 6, image: "carpeta_documentos.jpg", category: "Organización", brand: "Generic" },
    { id: 20, name: "Bolsas para Archivar", price: 3, image: "bolsas_archivar.jpg", category: "Organización", brand: "Generic" },

    // Café y Snacks
    { id: 21, name: "Cafetera de Goteo Black+Decker", price: 40, image: "cafetera_black_decker.jpg", category: "Café y Snacks", brand: "Black+Decker" },
    { id: 22, name: "Taza de Café Contigo", price: 15, image: "taza_contigo.jpg", category: "Café y Snacks", brand: "Contigo" },
    { id: 23, name: "Barra de Granola Nature Valley", price: 2, image: "barra_granola_nature_valley.jpg", category: "Café y Snacks", brand: "Nature Valley" },
    { id: 24, name: "Café Starbucks", price: 10, image: "cafe_starbucks.jpg", category: "Café y Snacks", brand: "Starbucks" },
    { id: 25, name: "Termo Stanley", price: 30, image: "termo_stanley.jpg", category: "Café y Snacks", brand: "Stanley" },

    // Salud y Bienestar
    { id: 26, name: "Botellas de Agua Contigo", price: 25, image: "botella_agua_contigo.jpg", category: "Salud y Bienestar", brand: "Contigo" },
    { id: 27, name: "Almohadilla de Masaje Shiatsu", price: 60, image: "almohadilla_masaje_shiatsu.jpg", category: "Salud y Bienestar", brand: "Generic" },
    { id: 28, name: "Aceite Esencial Lavanda", price: 12, image: "aceite_esencial_lavanda.jpg", category: "Salud y Bienestar", brand: "Generic" },
    { id: 29, name: "Lámpara de Sal Himalaya", price: 25, image: "lampara_sal_himalaya.jpg", category: "Salud y Bienestar", brand: "Generic" },
    { id: 30, name: "Mascarilla Facial Hidratante", price: 8, image: "mascarilla_facial_hidratante.jpg", category: "Salud y Bienestar", brand: "Generic" },

    // Otros
    { id: 31, name: "Agenda Académica 2024", price: 12, image: "agenda_academica_2024.jpg", category: "Otros", brand: "Generic" },
    { id: 32, name: "Cargador Inalámbrico", price: 25, image: "cargador_inalambrico.jpg", category: "Otros", brand: "Generic" },
    { id: 33, name: "Lámpara de Escritorio LED", price: 18, image: "lampara_escritorio_led.jpg", category: "Otros", brand: "Generic" },
    { id: 34, name: "Mochila para Universidad", price: 40, image: "mochila_universidad.jpg", category: "Otros", brand: "Generic" },
    { id: 35, name: "Calculadora Científica Casio", price: 20, image: "calculadora_casio.jpg", category: "Otros", brand: "Casio" },
    { id: 36, name: "Reloj Inteligente Xiaomi", price: 45, image: "reloj_inteligente_xiaomi.jpg", category: "Otros", brand: "Xiaomi" }
];



// Mostrar productos organizados por categorías
function displayProductsByCategory() {
    const categories = ["Maquillaje", "Cuidado del Cabello", "Cuidado de la Piel", "Fragancias", "Accesorios"];
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista de productos antes de agregarla nuevamente

    categories.forEach(category => {
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryTitle.classList.add('category-title'); // Aplicar la clase para el estilo
        productList.appendChild(categoryTitle);

        const filteredProducts = products.filter(product => product.category === category);
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
            `;
            productList.appendChild(productElement);
        });
    });
}

// Llamar a la función para mostrar los productos al cargar la página
document.addEventListener('DOMContentLoaded', displayProductsByCategory);



// Carrito de compras (arreglo para almacenar productos seleccionados)
let cart = [];

// Mostrar los productos filtrados
function displayFilteredProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar productos anteriores

    if (filteredProducts.length === 0) {
        productList.innerHTML = '<p>No se encontraron productos.</p>';
    } else {
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
            `;
            productList.appendChild(productElement);
        });
    }
}

// Buscar productos
function searchProducts() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) || product.brand.toLowerCase().includes(searchTerm)
    );
    displayFilteredProducts(filteredProducts);
}

// Inicializar productos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    displayFilteredProducts(products);
});

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    updateCartModal();
}

// Abrir y cerrar el modal del carrito
function openCartModal() {
    document.getElementById("cart-modal").style.display = "block";
}

function closeCartModal() {
    document.getElementById("cart-modal").style.display = "none";
}

// Abrir y cerrar el modal de pago
function openPaymentModal() {
    document.getElementById("payment-modal").style.display = "block";
}

function closePaymentModal() {
    document.getElementById("payment-modal").style.display = "none";
}

// Función para eliminar productos del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartModal();
}

// Función para actualizar el contador de productos en el carrito
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Función para actualizar el contenido del carrito en el modal
function updateCartModal() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div>
                    <p>${item.name}</p>
                    <p>Precio: $${item.price}</p>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" class="remove-item-btn">Eliminar</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const totalElement = document.createElement('div');
        totalElement.classList.add('cart-total');
        totalElement.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
        cartItemsContainer.appendChild(totalElement);
    }
}

// Función para abrir el modal de pago y proceder con el formulario
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pago procesado exitosamente');
});

// Funciones para los modales de login y contacto
function openLoginModal() {
    document.getElementById('login-modal').style.display = "block";
}

function closeLoginModal() {
    document.getElementById('login-modal').style.display = "none";
}

function openContactForm() {
    document.getElementById('contact-modal').style.display = "block";
}

function closeContactForm() {
    document.getElementById('contact-modal').style.display = "none";
}
