const list = document.querySelector(".list");
const form = document.querySelector(".form-product");
const frTitle = document.querySelector(".form-title");
const frDescription = document.querySelector(".form-description");
const frPrice = document.querySelector(".form-price");

async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    // console.log(data);

    getDataProducts(data);
  } catch (error) {
    console.error("Виникла помилка:", error);
  }
}

function getDataProducts(data) {
  if (data) {
    data.forEach((item) => {
      const el = document.createElement("li");
      const title = document.createElement("h1");
      title.textContent = item.title;

      const description = document.createElement("p");
      description.textContent = item.description;

      const price = document.createElement("span");
      price.textContent = item.price;

      el.appendChild(title);
      el.appendChild(description);
      el.appendChild(price);
      list.appendChild(el);
    });
    return;
  }
}

fetchData();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const productData = {
    title: frTitle.value,
    description: frDescription.value,
    price: frPrice.value,
  };

  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      console.log("Продукт успішно доданий!");
    } else {
      console.error("Помилка при додаванні продукта:", response.status);
    }
  } catch (error) {
    console.error("Виникла помилка:", error);
  }
});

const a = [{ d: 1 }, 2, 3];
const b = [...a];

b[0].d = 4;

console.log(a[0].d);


