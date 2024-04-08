import { useSelector } from "react-redux";
import { useState, useEffect, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const username = useAuth("");
  const navigate = useNavigate();
  const amount = useSelector(data => {
    return data.carts.reduce((accumulate, val) => accumulate+val.qty,0)
  })

  const HandlerLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <p>Loading data</p>
      ) : (
        <div>
          <div className="flex justify-around py-5 bg-slate-500">
            <p className="text-xl text-white font-bold">Username : {username}</p>
            <button
              className="bg-red-500 px-4 py-2 text-white font-semibold"
              onClick={HandlerLogout}
            >
              Logout
            </button>
            <p className="bg-green-500 text-white font-semibold px-4 py-2 self-center">Jumlah Keranjang : {amount}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
