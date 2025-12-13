let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://img.freepik.com/free-psd/vibrant-vegetable-harvest-colorful-collection-fresh-produce_191095-79960.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90kLBHkkyQngNmXPV-wM97fJYApDltpPgqw8XnIi7qfcuUj9qrslrQYJY769aBGONqVc&usqp=CAU'
    }
];

for (const product of products) {
    document.write(`<div class="product-card">
         <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
         <img src="${product.image}" alt="" class="product-image">
     </div>`);
}
