import { Navigate, Route, Routes } from "react-router-dom";
import LogInPage from "../auth/pages/LogInPage";
import Community from "../components/community/Community";
import Home from "../components/home/Home";
import News from "../components/news/News";
// import NotFound from "../components/notFound/NotFound";
import ProductDetail from "../components/product/ProductDetail";
import ProductHunterRouter from "../components/router/ProductHunterRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import ProductProvider from "../components/context/ProductProvider";
import ReviewProvider from "../components/context/ReviewProvider";
// No funciona la desestructuracion de los imports
// import { PrivateRouter } from "./PrivateRouter";
// import { PublicRouter } from "./PublicRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Navigate 
            to={"/products"}
          ></Navigate>
        }
      ></Route>
      <Route
        path="/products"
        element={
          <PublicRouter>
            <Home />
          </PublicRouter>
        }
      ></Route>
      <Route
        path="/products/product-detail/:id"
        element={
          <PublicRouter>
            <ProductDetail />
          </PublicRouter>
        }
      ></Route>
      <Route
        path="/news"
        element={
          <PublicRouter>
            <News />
          </PublicRouter>
        }
      ></Route>
      <Route
        path="/community"
        element={
          <PublicRouter>
            <Community />
          </PublicRouter>
        }
      ></Route>
      <Route
        path="/login-page"
        element={
          <PublicRouter>
            <LogInPage />
          </PublicRouter>
        }
      ></Route>
      <Route
        path="/*"
        element={
          <PrivateRouter>
            <ProductProvider>
              <ReviewProvider>
              <ProductHunterRouter />
              </ReviewProvider>
            </ProductProvider>
          </PrivateRouter>
        }
      ></Route>
      {/* <Route 
        path="*" 
        element={
          <NotFound />
        }
      ></Route> */}
    </Routes>
  );
};

export default AppRouter;
