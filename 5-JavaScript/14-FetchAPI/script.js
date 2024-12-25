let products = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => showProducts(data))
  .catch((err) => console.error("Error fetching products:", err));

function showProducts(data) {
  let dataList = document.querySelector(".list");

  data.forEach((product) => {
    let productList = `<h3>${product.title}</h3>
    <p>Price: ${product.price} </p>
    `;
    dataList.innerHTML += productList;
    console.log(product);
  });
}
