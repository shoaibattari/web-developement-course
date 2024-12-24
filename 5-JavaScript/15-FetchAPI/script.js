let products = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => showProducts(data))
  .catch((err) => console.error("Error fetching products:", err));

function showProducts(data) {
  let ul = document.querySelector(".list");

  data.forEach((product) => {
    let li = `<h3>${product.title}</h3>
    <p>Price: ${product.price} </p>
    `;
    ul.innerHTML += li;
    console.log(product);
  });
}
