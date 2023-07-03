const URL = "https://fakestoreapi.com";

async function getProducts() {
  const products = await fetch(URL + "/products");
  return products;
}

async function loginUser(body) {
  const response = await fetch(URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return response;
}

export { getProducts, loginUser };
