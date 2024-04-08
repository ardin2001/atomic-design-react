import CardHeader from "../components/elements/card_products/header";
import CardFooter from "../components/elements/card_products/footer";
import CardBody from "../components/elements/card_products/body";
import CardProducts from "../components/fragments/cardProducts";
import { useState, useEffect, useRef, Fragment } from "react";
import { getProducts } from "../utils/api";
import { json, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProductApiPage = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const username = useAuth("");
  const useRefTotal = useRef();
  const navigate = useNavigate();

  const HandlerLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const HandlerCarts = (id) => {
    const product = products.find((product) => product.id == id);
    if (product != undefined) {
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
    const productsAPI = async () => {
      try {
        const response = await getProducts();
        const products = await response.json();
        setProducts(products);
        setLoading(false);
      } catch {
        console.log("error request to api");
      }
    };
    productsAPI();
    setCarts(JSON.parse(localStorage.getItem('carts')) || [])
  }, []);

  useEffect(() => {
    if (carts.length > 0 && loading == false) {
      useRefTotal.current.style.display = "block";
      const totalPrice = carts.reduce((sum, cart) => {
        const newCart = products.find((product) => product.id == cart.id);
        return sum + newCart.price * cart.qty;
      }, 0);
      setTotalPrice(totalPrice);
      localStorage.setItem("carts", JSON.stringify(carts));
    } else if (carts.length <= 0 && loading == false) {
      useRefTotal.current.style.display = "none";
    }
  }, [carts, loading]);

  return (
    <Fragment>
      {loading ? (
        <p>Loading data</p>
      ) : (
        <div>
          <div>
            <p className="text-xl">Username : {username}</p>
            <button
              className="bg-slate-600 px-4 py-2 text-white"
              onClick={HandlerLogout}
            >
              Logout
            </button>
          </div>
          <div className="flex">
            <div className="flex gap-3 flex-wrap p-5 w-11/12">
              {products.map((product) => {
                return (
                  <CardProducts key={product.id}>
                    <CardHeader image={product.image} />
                    <CardBody
                      name={product.title}
                      description={product.description}
                    />
                    <CardFooter
                      price={product.price}
                      id={product.id}
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
                    const product = products.find((data) => data.id == cart.id);
                    return (
                      <tr key={cart.id}>
                        <td>{product.id}</td>
                        <td>
                          {product.title.length >= 21
                            ? product.title.substring(0, 21) + "..."
                            : product.title}
                        </td>
                        <td>{cart.qty}</td>
                        <td>${(cart.qty * product.price).toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p ref={useRefTotal}>Total Price : $ {totalPrice}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductApiPage;
