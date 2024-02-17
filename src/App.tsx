import React, { useState, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const NotFound = lazy(() => import("./components/NotFound"));
const Home = lazy(() => import("./components/Home"));

const App: React.FC = () => {
  const titleSuffix = " - There is no place like 127.0.0.1 🏠";
  const [theme] = useState("default");

  return (
    <div data-theme={theme} className="font-sans min-h-screen">
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <div>
                <Header theme={theme} />
                <NotFound title="Not Found" />
                <Footer />
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div>
                <Header theme={theme} />
                <Home title={"Hi! 👋" + titleSuffix} theme={theme} />
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
