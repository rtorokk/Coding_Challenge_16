// Task 2: Fetching products 
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")// fetching data from the API
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);// if the response is not ok, throw an error
        }
        return await response.json();//wait for the response to be converted to JSON
      })
        .then((products) => {
            console.log("Products fetched with .then():");// log the message
            products.forEach((product) => {
                console.log(product.fields.name); // log the name of each product
            });
            displayProducts(products); // Display products after fetching
        })
        .catch((error) => {
            console.error("Error fetching products:", error); // log any errors that occur during the fetch
            handleError(error); // handle the error
        });
    } 

// Task 3: Fetching products with async/await
async function fetchProductsAsync() {
    try {
        const response = await fetch ("https://www.course-api.com/javascript-store-products");// fetching data from the API
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);// if the response is not ok, throw an error
        }
        const products = await response.json();//wait for the response to be converted to JSON
        displayProducts(products); // Display products after fetching
    } catch (error) {
        console.error("Error fetching products:", error.message); // log any errors that occur during the fetch
        handleError(error); // rethrow the error to be handled by the caller
    }
}

//Task 4: Displaying products

function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear previous content

    products.slice(0,5).forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <h3>${product.fields.name}</h3>
            <p>Price: $${product.fields.price}</p>
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
        `;
        container.appendChild(productElement);
    });
}
//Task 5: Reusable error handling function
function handleError(error) {
    const container = document.getElementById("product-container");
    container.innerHTML = `<p class="error">Error: ${error.message}</p>`;
}
//Task 6: Fetching products with error handling
fetchProductsAsync()
fetchProductsThen()












