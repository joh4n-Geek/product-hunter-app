// import ProductDetail from "./components/product/product-detail";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginModal from "./auth/components/login-modal/LoginModal.jsx";
import Community from "./components/community/Community.jsx";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import News from "./components/news/News.jsx";

function App() {
  const currentTheme = localStorage.getItem("currentTheme");

  const [searchText, setSearchText] = useState("");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");
  const [displayModal, setDisplayModal] = useState(false);

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

  // const handleInputSearchText = () => {
  //   try {
  //     setProducts(productList.results);
  //   } catch(error) {
  //     console.log('Ha ocurrido un error: ', error);
  //   }
  // };

  return (
    <>
      {displayModal ? <LoginModal setDisplayModal={setDisplayModal} /> : <></>}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        setDisplayModal={setDisplayModal}
      />
      <div className={`container-fluid bg-${theme}`} data-bs-theme={theme}>
        {/* Linea para probar la pagina detalle de producto */}
        {/* <ProductDetail product={product} /> */}
        <div className="container bg-dark p-4">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="news" element={<News />}></Route>
            <Route path="community" element={<Community />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
