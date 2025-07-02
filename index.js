fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    const products = res.products;
    const box = document.getElementById("box");

    products.forEach((product, i) => {
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card h-100" style="cursor:pointer" data-index="${i}" data-bs-toggle="modal" data-bs-target="#productModal">
          <img src="${product.thumbnail}" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description.substring(0, 50)}...</p>
            <p class="mb-1"><strong>Category:</strong> ${product.category}</p>
            <p class="mb-1"><strong>Brand:</strong> ${product.brand}</p>
            <p class="mb-1"><strong>Price:</strong> ₹${product.price}</p>
            <p><strong>Stock:</strong> ${product.stock} units</p>
          </div>
        </div>`;
      box.appendChild(card);

      // Add click event for showing modal details
      card.querySelector(".card").addEventListener("click", () => {
        document.getElementById("modalTitle").innerText = product.title;
        document.getElementById("modalImage").src = product.thumbnail;
        document.getElementById("modalDescription").innerText = product.description;
        document.getElementById("modalCategory").innerText = product.category;
        document.getElementById("modalBrand").innerText = product.brand;
        document.getElementById("modalPrice").innerText = product.price;
        document.getElementById("modalStock").innerText = product.stock;
      });
    });
  });