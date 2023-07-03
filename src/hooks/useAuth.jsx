import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const useAuth = (value) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(value);
  useEffect(() => {
    const jwt_user = localStorage.getItem("token");
    if (jwt_user == undefined) {
      navigate("/login");
    } else {
      const user = jwt_decode(jwt_user);
      setUsername(user.user);
    }
  }, []);

  return username;
};

export default useAuth;
