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
        })
        .catch((error) => {
            console.error("Error fetching products:", error); // log any errors that occur during the fetch
        });
    }
    fetchProductsThen();// call the function to fetch products                