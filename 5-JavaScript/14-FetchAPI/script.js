let products = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => showProducts(data))
  .catch((err) => console.error("Error fetching products:", err));

function showProducts(data) {
  let dataList = document.querySelector(".list");

  data.forEach((product) => {
    let productList = `
    <div class="p-4 m-4 flex flex-col gap-3 rounded-lg border-2 bg-gray-50 rounded-lg  cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
      <img src="${product.image}" alt="${product.title}" class="w-32 h-32 mx-auto">
     <h3 class="text-lg min-h-12">Title:${product.title}</h3>
     <p class="text-md">Category: ${product.category} </p>
     <p class="text-md text-wrap">description: ${product.description} </p>
     <p class="text-md">Price: ${product.price} </p>
    </div>
    `;
    dataList.innerHTML += productList;
    console.log(product);
  });
}
