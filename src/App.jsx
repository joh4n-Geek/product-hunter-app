import { useEffect, useState } from "react";
import { AuthProvider } from "./auth";
import Navbar from "./components/navbar/Navbar.jsx";
import AppRouter from "./router/AppRouter.jsx";
import "./App.css";

function App() {
  const currentTheme = localStorage.getItem("currentTheme");

  const [searchText, setSearchText] = useState("");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");
  const [displayModal, setDisplayModal] = useState(false);

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
      <AuthProvider>
        <Navbar
          theme={theme}
          setTheme={setTheme}
          setDisplayModal={setDisplayModal}
        />
        <div className={`container-fluid bg-${theme}`} data-bs-theme={theme}>
          <div className="container bg-dark p-4">
            <AppRouter />
          </div>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
