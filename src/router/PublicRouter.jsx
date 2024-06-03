import { useContext } from "react"
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  return (!isLogged ? children : <Navigate to="/products"/>);
};

export default PublicRouter;