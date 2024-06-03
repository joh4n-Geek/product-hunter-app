import { useEffect, useState } from "react";
import Header from "../header/Header";
import ProductCard from "../product/ProductCard";
import { getProducts } from "../../helpers/getProducts";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductList = () => {
      const productList = getProducts();
      setProducts(productList);
    };
    fetchProductList();
  }, []);

  return (
    <>
      <Header />
      <div className="row bg-warning">
        <div className="col-8 p-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="col-4 p-5">
          <h5>Latest News</h5>
          <div className="card mt-4">
            <img
              src="https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
