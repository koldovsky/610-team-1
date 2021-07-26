const productsJson =`[
    {
        "id": "1",
        "pages": "wildflower-honey.html",
        "imageUrl": "img/types-of-honey/wildflower-honey.jpg",
        "title": "Wildflower Honeyy",
        "price": " 7.000 ",
        "button": "Buy Now"
    },
    {
        "id": "2",
        "pages": "wildflower-honey.html",
        "imageUrl": "img/types-of-honey/blossom-honey.jpg",
        "title": "Blossom Honey",
        "price": " 20.000 ",
        "button": "Buy Now"
    },
    {
        "id": "3",
        "pages": "wildflower-honey.html",
        "imageUrl": "img/types-of-honey/clover-honey.jpg",
        "title": "Clover Honey",
        "price":  " 8.000 ",
        "button": "Buy Now" 
    },
    {
        "id": "4",
        "pages": "wildflower-honey.html",
        "imageUrl": "img/types-of-honey/buckwheat-honey.jpg",
        "title": "Buckwheat Honey",
        "price": " 10.000 ", 
        "button": "Buy Now"
    },
    {
        "id": "5",
        "pages": "wildflower-honey.html",
        "imageUrl": "img/types-of-honey/citrus-blossom-honey.jpg",
        "title": "Citrus Blossom Honey",
        "price": " 15.000 ",
        "button": "Buy Now" 
    }
]`;
const product = JSON.parse(productsJson);
function renderProducts(products){
    let html = "";
    for (const product of products) {
        html += `<div class="slide-shop">
        <a href="${product.pages}" target="_blank">
        <img class="img-carousel-two" src="${product.imageUrl}" alt="wildflower-honey"/></a>
        <h4>${product.title}</h4>
        <h5>$${product.price}USA </h5>
        <a href="#store" class="button-outline-button">${product.button}</a>
        </div>`;
    }
    document.querySelector('.carousel-two').innerHTML = html;
}
renderProducts(product);

