// Seccion de Botones Carrito
const cart = document.querySelector('#Carrito');
const btnModalCarrito = document.querySelector('#btnModalCarrito');
// Seccion de Ilustracion
const contentIlustration = document.querySelector('.ilustration');
// Seccion de productos Recomendados
const contentRecommended = document.querySelector('.recommended');

const recommendedTittle = document.createElement('div');
recommendedTittle.classList.add('recommendedTittle');
const titleReco = document.createElement('h2');
const titleText = document.createTextNode('Productos Mas Vendidos');

const recommendedProducts = document.createElement('div');
recommendedProducts.classList.add('recommendedProducts');
const cardPerTemplate = document.createElement('div');
cardPerTemplate.classList.add('cardPer');
const cardPerImg = document.createElement('img');
cardPerImg.setAttribute('src', './assets/logos/logobenidorm.jpg');


for (let i=0; i< 4; i++){
    const cardPer = cardPerTemplate.cloneNode(true);
    const cardPerImgclone = cardPerImg.cloneNode();
    cardPer.appendChild(cardPerImgclone);
    recommendedProducts.appendChild(cardPer);
}
contentRecommended.appendChild(recommendedTittle);
recommendedTittle.appendChild(titleReco);
titleReco.appendChild(titleText);
contentRecommended.appendChild(recommendedProducts);
// Fin de la seccion de productos Recomendados

// Seccion de tarjetas de ilustracion
fetch('json/data.json')
    .then(response => {
    if (!response.ok) {
        throw new Error('Ocurrió un error al cargar los datos.');
    }
    return response.json();
})
.then(data =>{
        data.ilustration.slice(0, 4).forEach(item => {
            const pagesIlustration = document.createElement('div');
            pagesIlustration.classList.add('pages-ilustration');

            const pagesImg = document.createElement('img');
            pagesImg.setAttribute('src', item.src);
            pagesImg.classList.add('img-card');

            const pagesBtn = document.createElement('button');
            pagesBtn.classList.add('btn');
            pagesBtn.textContent = item.clase;

            pagesIlustration.appendChild(pagesImg);
            pagesIlustration.appendChild(pagesBtn);

            contentIlustration.appendChild(pagesIlustration);

            



            pagesBtn.addEventListener('click', () =>{
                window.location.href = './pages/products.html';
            })
        });
    })
    .catch(error => console.error(error));
    // Fin de la seccion de tarjetas de ilustracion

    // Seccion de Botones Carrito
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