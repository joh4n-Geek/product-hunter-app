import { useContext } from "react";
import { AuthContext } from "../auth";

const PublicRouter = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  return !isLogged ? children : children;
};

export default PublicRouter;
