import CardHeader from "../components/elements/card_products/header";
import CardFooter from "../components/elements/card_products/footer";
import CardBody from "../components/elements/card_products/body";
import CardProducts from "../components/fragments/cardProducts";
import datasets from "../utils/data_products";
import { useState } from "react";

const ProductsPage = () => {
  const [carts, setCarts] = useState([]);
  const HandlerCarts = (id) => {
    const dataset = datasets.find((dataset) => dataset.id == id);
    if (dataset != undefined) {
      const cart = carts.find((cart) => cart.id == id);
      if (cart == undefined) {
        setCarts((previous) => {
          return [
            ...previous,
            {
              id,
              qty: 1,
            },
          ];
        });
      } else {
        const newCarts = carts.map(cart => {
          if (cart.id == id) {
            cart.qty += 1;
          }
          return cart
        });
        setCarts(newCarts);
      }
    } else {
      alert("Invalid id");
    }
  };

  // const popUp = (name="Ardin") => {
  //   alert("Welcome " + name);
  // };

  return (
    <div className="flex">
      <div className="flex  flex-wrap p-5 w-2/3">
        {datasets.map((dataset) => {
          return (
            <CardProducts key={dataset.id}>
              <CardHeader image={dataset.image} />
              <CardBody name={dataset.name} description={dataset.description} />
              <CardFooter
                price={dataset.price}
                id={dataset.id}
                HandlerCarts={HandlerCarts}
              />
            </CardProducts>
          );
        })}
      </div>
      <div className="p-5 w-1/3">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Products</th>
              <th>Qty</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => {
              const dataset = datasets.find((data) => data.id == cart.id);
              return (
                <tr key={cart.id}>
                  <th>{dataset.id}</th>
                  <th>{dataset.name}</th>
                  <th>{cart.qty}</th>
                  <th>Rp.{(cart.qty * dataset.price).toLocaleString()}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
