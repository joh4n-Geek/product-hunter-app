import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  return (isLogged ? children : <Navigate to="/products" />);
};

export default PrivateRouter;