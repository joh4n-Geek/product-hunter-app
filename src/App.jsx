import ProductCard from "./components/product/product-card";
// import ProductDetail from "./components/product/product-detail";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { getProducts } from "./helpers/getProducts";

function App() {
  const currentTheme = localStorage.getItem("currentTheme");

  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  // Objeto para probar el detalle de producto
  // const product =  {
  //   id : 20,
  //   name: "ASUS ROG Strix Scar 17",
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   image_url: "https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   average_rating: 4.9
  // };

  // Se pueden usar varios useEffect???
  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  useEffect(() => {
    const fetchProductList = () => {
      const productList = getProducts();
      setProducts(productList);
    };
    fetchProductList();
  }, []);

  // const handleInputSearchText = () => {
  //   try {
  //     setProducts(productList.results);
  //   } catch(error) {
  //     console.log('Ha ocurrido un error: ', error);
  //   }
  // };

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className={`container-fluid bg-${theme}`} data-bs-theme={theme}>
        {/* Linea para probar la pagina detalle de producto */}
        {/* <ProductDetail product={product} /> */}
        <div className="container p-4">
          <div className="row">
            <div className="col-8 p-5">
              <div className="">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
