import { useRef, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonOnlick } from "../elements/button";
import cartSlice from "../../redux/cartSlice";
import {
  TotalPriceContext,
  TotalPriceDispatchContext,
} from "../../context/CreateContext";

const CartsProductsUseReducer = (props) => {
  const { products, loading } = props;
  const useRefTotal = useRef();
  const dispatch = useDispatch();
  const carts = useSelector((store) => store.carts);
  const { total } = useContext(TotalPriceContext);
  const dispatchUseReducer = useContext(TotalPriceDispatchContext);

  useEffect(() => {
    if (carts.length > 0) {
      useRefTotal.current.style.display = "block";
      const totalPrice = carts.reduce((sum, cart) => {
        const newCart = products.find((product) => product.id == cart.id);
        return sum + newCart.price * cart.qty;
      }, 0);
      dispatchUseReducer({
        type: "UPDATE",
        payload: {
          total: totalPrice,
        },
      });
      localStorage.setItem("carts", JSON.stringify(carts));
    } else if (carts.length <= 0) {
      useRefTotal.current.style.display = "none";
    }
  }, [carts, ]);

  const deleteCarts = (id) => {
    dispatch(cartSlice.actions.deleteCarts({ id }));
  };
  const deleteAllCarts = (id) => {
    dispatch(cartSlice.actions.deleteAllCarts({ id }));
  };

  return (
    <div className="p-5">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Products</th>
            <th>Qty</th>
            <th>Total Price</th>
            <th>Action</th>
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
                <td>
                  <div className="flex gap-2">
                    <ButtonOnlick
                      children="Delete"
                      classname="bg-yellow-500"
                      id={cart.id}
                      HandlerCarts={deleteCarts}
                    />
                    <ButtonOnlick
                      children="Delete All"
                      classname="bg-red-500"
                      id={cart.id}
                      HandlerCarts={deleteAllCarts}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p ref={useRefTotal}>Total Price : $ {total}</p>
    </div>
  );
};

export default CartsProductsUseReducer;
