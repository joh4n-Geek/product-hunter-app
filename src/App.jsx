import { useEffect, useState } from "react";
import "./App.css";
import { AuthProvider } from "./auth";
import Navbar from "./components/navbar/Navbar.jsx";
import AppRouter from "./router/AppRouter.jsx";

function App() {
  const currentTheme = localStorage.getItem("currentTheme");

  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  return (
    <>
      <AuthProvider>
        <Navbar theme={theme} setTheme={setTheme} />
        <div className={`container-fluid bg-${theme}`} data-bs-theme={theme}>
          <div className="container p-4">
            <AppRouter />
          </div>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
