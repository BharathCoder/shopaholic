const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const navLinks = navbar.querySelector('.links');
const searchBox = document.querySelector('.search-wrapper');
const burgerLines = burger.getElementsByClassName('line');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const productItems = document.getElementsByClassName('product-item');

// Products
const products = [
    {
        name: "Adidas VS Pace 2.0",
        redirect: "https://www.adidas.co.in/vs-pace-2.0-shoes/HP6007.html",
        cover: "./prod/vspace_adidas_1.avif",
        hoverImage: "./prod/vspace_adidas_2.avif",
    }
];

// Responsive Navbar
burger.addEventListener('click', ()=>{
    navbar.classList.toggle('hclass');
    navLinks.classList.toggle('vix');
    searchBox.classList.toggle('vix');
});

// Search Function
const search = (query)=>{
    for (let i = 0; i < productItems.length; i++) {
        const element = productItems[i];
        const title = element.getElementsByClassName('product-title')[0].innerText.toUpperCase();
        if(title.indexOf(query.toUpperCase()) != -1){
            element.style.display = "flex";
            console.log(1)
        }
        else{
            element.style.display = "none";
            console.log(0)
        }
    }
}

// Search on clicking button
searchBtn.addEventListener('click', ()=>{
    search(searchInput.value)
});

// Search on key press 'Enter'
searchInput.addEventListener('keyup', (e)=>{
    if(e.key == 'Enter'){
        search(searchInput.value)
    }
});

// Change Image on Mouseover
Array.from(productItems).forEach((item, i)=>{
    const img = item.getElementsByTagName('img')[0]
    img.addEventListener('mouseover', ()=>{
        img.src = products[i].hoverImage
        img.addEventListener('mouseout', ()=>{
            img.src = products[i].cover
        })
    })
})