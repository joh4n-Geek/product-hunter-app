import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

const PrivateRouter = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  return isLogged ? children : <Navigate to="/products" />;
};

export default PrivateRouter;
