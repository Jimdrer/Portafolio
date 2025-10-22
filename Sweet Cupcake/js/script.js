class SweetCupcakeApp {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    this.products = [
      {
        id: 1,
        name: "Cupcakes Clásicos",
        price: 2.5,
        category: "cupcakes",
        description: "Deliciosos cupcakes con frosting de vainilla o chocolate",
        image: "img/cake-balls-g307bf7104_1280.jpg",
        badge: "Nuevo",
      },
      {
        id: 2,
        name: "Pastel Red Velvet",
        price: 35,
        category: "pasteles",
        description: "Clásico pastel de terciopelo rojo con crema de queso",
        image: "img/velvet-01.jpg",
      },
      {
        id: 3,
        name: "Hojaldradas Rellenas",
        price: 3.0,
        category: "especiales",
        description:
          "Delicadas hojaldradas rellenas de diversos frutos de temporada",
        image: "img/cake-g6aa0351c4_1280.jpg",
        badge: "Popular",
      },
      {
        id: 4,
        name: "Pastel de Chocolate Belga",
        price: 42,
        category: "pasteles",
        description: "pastel de chocolate intenso con relleno de ganache",
        image: "img/cake-g140c9e0e1_1280.jpg",
      },
    ];

    this.testimonials = [
      {
        text: "El pastel de mi boda fue absolutamente perfecto. No solo era hermoso, sino que sabía increíble.",
        name: "María González",
        role: "Novia",
        image: "img/2149708104.jpg",
      },
      {
        text: "Los cupcakes para el cumpleaños de mi hija fueron un éxito. Todos preguntaron dónde los compramos.",
        name: "Carlos Mendoza",
        role: "Padre",
        image: "img/2147997462.jpg",
      },
      {
        text: "Nuestros clientes quedaron encantados con los postres para nuestro evento corporativo.",
        name: "Laura Jiménez",
        role: "Gerente de Marketing",
        image: "img/642.jpg",
      },
    ];

    this.popup = document.getElementById("cartPopup");

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderProducts();
    this.loadTestimonials();
    this.updateCartCount();
    setTimeout(() => {
      this.initResponsiveCarousel();
    }, 300);
  }

  //Metodo para popup
  showCartPopup(product) {
  const popup = document.getElementById('cartPopup');
  if (!popup) return;

  // Actualizar información del producto agregado
  document.getElementById('popupProductName').textContent = product.name;
  document.getElementById('popupProductPrice').textContent = `$${product.price.toFixed(2)}`;
  
  const productImage = document.getElementById('popupProductImage');
  productImage.src = product.image;
  productImage.alt = product.name;

  // Actualizar resumen del carrito
  this.updatePopupCartSummary();

  // Mostrar popup
  popup.classList.add('show');

  // Auto-cerrar después de 5 segundos
  setTimeout(() => {
    this.hideCartPopup();
  }, 5000);
}

// MÉTODO PARA ACTUALIZAR EL RESUMEN EN EL POPUP
updatePopupCartSummary() {
  const cartItemsContainer = document.getElementById('popupCartItems');
  const cartTotalElement = document.getElementById('popupCartTotal');
  
  if (!cartItemsContainer || !cartTotalElement) return;

  // Limpiar contenedor
  cartItemsContainer.innerHTML = '';

  // Calcular total
  let total = 0;

  // Agregar items al popup (máx # items)
  this.cart.slice(0, 4).forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement('div');
    cartItem.className = 'popup-cart-item';
    cartItem.innerHTML = `
      <span class="popup-item-name">${item.name} x${item.quantity}</span>
      <span class="popup-item-price">$${itemTotal.toFixed(2)}</span>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Mostrar total
  cartTotalElement.textContent = total.toFixed(2);

  // Mostrar mensaje si hay más items
  if (this.cart.length > 3) {
    const moreItems = document.createElement('div');
    moreItems.className = 'popup-more-items';
    moreItems.textContent = `+${this.cart.length - 3} productos más...`;
    cartItemsContainer.appendChild(moreItems);
  }
}

// MÉTODO PARA OCULTAR EL POPUP
hideCartPopup() {
  const popup = document.getElementById('cartPopup');
  if (popup) {
    popup.classList.remove('show');
  }
}
  

  setupEventListeners() {
    // Menú móvil
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
      menuToggle.addEventListener("click", this.toggleMobileMenu.bind(this));
    }

    // Filtrado de productos
    const tabButtons = document.querySelectorAll(".tab-btn");
    if (tabButtons.length > 0) {
      tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          tabButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          this.filterProducts(btn.dataset.category);
        });
      });
    }

    // Formularios
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) =>
        this.handleContactSubmit(e)
      );
    }

    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) =>
        this.handleNewsletterSubmit(e)
      );
    }

    // Carrito
    const cartBtn = document.querySelector(".cart-btn");
    if (cartBtn) {
      cartBtn.addEventListener("click", () => this.toggleCart());
    }

    const closeCart = document.querySelector(".close-cart");
    if (closeCart) {
      closeCart.addEventListener("click", () => this.toggleCart());
    }

    const modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.addEventListener("click", () => this.toggleCart());
    }

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });
    //Listeners para el popup
    document.querySelector(".close-popup")?.addEventListener("click", () => {
      this.hideCartPopup();
    });

    document
      .getElementById("continueShopping")?.addEventListener("click", () => {
        this.hideCartPopup();
      });

    document.getElementById("goToCheckout")?.addEventListener("click", () => {
      this.hideCartPopup();
      this.toggleCart(); // Abrir el carrito completo
    });

    // Cerrar popup al hacer clic fuera
    document.getElementById("cartPopup")?.addEventListener("click", (e) => {
      if (e.target.id === "cartPopup") {
        this.hideCartPopup();
      }
    });

    // Cerrar con ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.hideCartPopup();
      }
    });
  }

  renderProducts(filter = "todos") {
    const productGrid = document.querySelector(".product-grid");
    if (!productGrid) return;

    productGrid.innerHTML = "";

    const filteredProducts =
      filter === "todos"
        ? this.products
        : this.products.filter((p) => p.category === filter);

    if (filteredProducts.length === 0) {
      productGrid.innerHTML =
        '<p class="no-products">No hay productos en esta categoría</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = `product-card ${
        product.badge ? "product-card-featured" : ""
      }`;

      productCard.innerHTML = `
        ${
          product.badge
            ? `<span class="product-card-badge">${product.badge}</span>`
            : ""
        }
        <div class="product-card-img" style="background-image: url('${
          product.image
        }')"></div>
        <div class="product-card-info">
          <h3>${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <p class="price">$${product.price.toFixed(2)}</p>
          <button class="btn btn-primary" data-id="${
            product.id
          }">Añadir al carrito</button>
        </div>
      `;

      productGrid.appendChild(productCard);
    });

    // Eventos para botones "Añadir al carrito"
    document.querySelectorAll(".product-card .btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = parseInt(btn.dataset.id);
        const product = this.products.find((p) => p.id === productId);
        if (product) {
          this.addToCart(productId);
          this.showCartPopup(product);
          this.showNotification(`${product.name} añadido al carrito`);
        }
      });
    });
  }

  filterProducts(category) {
    this.renderProducts(category);
  }

  // Carrito de compras
  addToCart(productId) {
    const product = this.products.find((p) => p.id === productId);
    if (!product) return;

    const existingItem = this.cart.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.saveCart();
    this.updateCartUI();
  }

  updateCartUI() {
    const cartItems = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total span");
    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = this.cart
      .map(
        (item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
          <div class="item-quantity">
            <button class="decrease" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button class="increase" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="remove-item" data-id="${item.id}">&times;</button>
      </div>
    `
      )
      .join("");

    const total = this.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Eventos para botones del carrito
    document.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.removeFromCart(parseInt(btn.dataset.id));
        this.showNotification("Producto eliminado del carrito");
      });
    });

    document.querySelectorAll(".increase").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.updateQuantity(parseInt(btn.dataset.id), 1);
      });
    });

    document.querySelectorAll(".decrease").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.updateQuantity(parseInt(btn.dataset.id), -1);
      });
    });
  }

  updateQuantity(productId, change) {
    const item = this.cart.find((item) => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      this.showNotification("Producto eliminado del carrito");
    }

    this.saveCart();
    this.updateCartUI();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter((item) => item.id !== productId);
    this.saveCart();
    this.updateCartUI();
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.updateCartCount();
  }

  updateCartCount() {
    const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.querySelector(".cart-count");
    if (cartCount) {
      cartCount.textContent = count;
    }
  }

  toggleCart() {
    document.querySelector(".cart-modal")?.classList.toggle("show");
    document.querySelector(".modal-overlay")?.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
    this.updateCartUI();
  }

  // Testimonios
  loadTestimonials() {
    const slider = document.querySelector(".testimonial-slider");
    if (!slider) return;

    this.testimonials.slice(1).forEach((testimonial) => {
      const testimonialEl = document.createElement("div");
      testimonialEl.className = "testimonial";
      testimonialEl.innerHTML = `
      <div class="client">
      <img src="${testimonial.image}" alt="${testimonial.name}">
      <p>"${testimonial.text}"</p>
          <h4>${testimonial.name}</h4>
          <span>${testimonial.role}</span>
        </div>
      `;
      slider.appendChild(testimonialEl);
    });

    // Slider automático
    let currentIndex = 0;
    const testimonialsEl = document.querySelectorAll(".testimonial");
    if (testimonialsEl.length > 0) {
      setInterval(() => {
        testimonialsEl[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % testimonialsEl.length;
        testimonialsEl[currentIndex].classList.add("active");
      }, 5000);
    }
  }

  // Formularios
  handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    let isValid = true;

    form.querySelectorAll("[required]").forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add("error");
        isValid = false;
      } else {
        input.classList.remove("error");
      }
    });

    if (isValid) {
      this.showNotification(
        "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
        "success"
      );
      form.reset();
    } else {
      this.showNotification(
        "Por favor completa todos los campos requeridos.",
        "error"
      );
    }
  }

  handleNewsletterSubmit(e) {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');

    if (emailInput.value && emailInput.value.includes("@")) {
      this.showNotification(
        "¡Gracias por suscribirte a nuestro newsletter!",
        "success"
      );
      e.target.reset();
      emailInput.classList.remove("error");
    } else {
      emailInput.classList.add("error");
      this.showNotification("Por favor ingresa un email válido", "error");
    }
  }

  // Menú móvil
  toggleMobileMenu() {
    document.querySelector("nav ul")?.classList.toggle("show");
    document.querySelector(".menu-toggle")?.classList.toggle("active");
  }

  // Notificaciones
  showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("fade-out");
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Iniciar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  const app = new SweetCupcakeApp();
});
