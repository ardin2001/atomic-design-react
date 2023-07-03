const URL = "https://fakestoreapi.com";

async function getProducts(){
    const products = await fetch(URL+"/products");
    return products
}

export {getProducts}