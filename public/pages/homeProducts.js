// import { faker } from "@faker-js/faker";

const homeProducts = document.querySelector(".home-products-grid");
console.log(homeProducts)
const products = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((p, i) => ({
  title: "bestbook",
  description: "this is the best book ever",
  image: `assets/images/products/${i + 1}.webp`,
  price: "122",
  discount: "2",
  // this will have to be modified in schema
  reviewsCount: 120,
}));

products.map((p) => {
  const productElement = document.createElement("div");
  productElement.innerHTML = `
    <div class=" bg-white shadow rounded overflow-hidden group">
    <div class="relative">
        <img src="${p.image}" alt="${p.title}" class="w-full !h-64">
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <a href="#"
                class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                title="view product">
                <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <a href="#"
                class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                title="add to wishlist">
                <i class="fa-solid fa-heart"></i>
            </a>
        </div>
    </div>
    <div class="pt-4 pb-3 px-4">
        <a href="#">
            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            ${p.title}</h4>
        </a>
        <div class="flex items-baseline mb-1 space-x-2">
            <p class="text-xl text-primary font-semibold">$${p.price}</p>
            <p class="text-sm text-gray-400 line-through">$${p.discount}</p>
        </div>
        <div class="flex items-center">
            <div class="flex gap-1 text-sm text-yellow-400">
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
            </div>
            <div class="text-xs text-gray-500 ml-3">(${p.reviewsCount})</div>
        </div>
    </div>
    <a href="#"
        class="btn-primary">Add
        to cart</a>
</div>`;
  homeProducts.appendChild(productElement);
});

