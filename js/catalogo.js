const cart = document.querySelector('#Carrito');
const btnModalCarrito = document.querySelector('#btnModalCarrito');
const carrito = document.createElement('button');
    carrito.classList.add('btnCart');
    carrito.setAttribute('id', 'btnModalCarrito');
    carrito.innerHTML = '<i class="ri-shopping-cart-line"></i>';
    const cartCount = document.createElement('span');
    cartCount.setAttribute('id', 'cartCount');
    cartCount.classList.add('badge', 'text-bg-secondary');
    cartCount.textContent = '0';


    carrito.appendChild(cartCount);
    cart.appendChild(carrito);