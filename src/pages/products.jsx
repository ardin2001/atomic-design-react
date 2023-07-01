import CardHeader from "../components/elements/card_products/header";
import CardFooter from "../components/elements/card_products/footer";
import CardBody from "../components/elements/card_products/body";
import CardProducts from "../components/fragments/cardProducts";
import datasets from "../utils/data_products";
import { useState, useEffect,useRef } from "react";

const ProductsPage = () => {
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const useRefTotal = useRef();

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
        const newCarts = carts.map((cart) => {
          if (cart.id == id) {
            cart.qty += 1;
          }
          return cart;
        });
        setCarts(newCarts);
      }
    } else {
      alert("Invalid id");
    }
  };

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("carts")) || []);
  }, []);

  useEffect(() => {
    if (carts.length > 0) {
      useRefTotal.current.style.display = "block";
      const totalPrice = carts.reduce((sum, cart) => {
        const newCart = datasets.find((dataset) => dataset.id == cart.id);
        return sum + newCart.price*cart.qty;
      }, 0);
      setTotalPrice(totalPrice);
    }else{
      useRefTotal.current.style.display = "none";
    }
    localStorage.setItem("carts",JSON.stringify(carts))
  }, [carts]);

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
                  <td>{dataset.id}</td>
                  <td>{dataset.name}</td>
                  <td>{cart.qty}</td>
                  <td>Rp.{(cart.qty * dataset.price).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p ref={useRefTotal}>Total Price : {totalPrice}</p>
      </div>
    </div>
  );
};

export default ProductsPage;
