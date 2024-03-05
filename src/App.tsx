import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const NotFound = lazy(() => import("./components/NotFound"));
const Home = lazy(() => import("./components/Home"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Social = lazy(() => import("./components/Social"));
const Welcome = lazy(() => import("./components/Welcome"));
// const Posts = lazy(() => import("./components/Posts"));

const App: React.FC = () => {
  const titleSuffix = " - There is no place like 127.0.0.1 🏠";

  return (
    <div className="font-sans min-h-screen">
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <div>
                <Header />
                <NotFound title="Not Found" />
                <Footer />
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div>
                <div className="flex min-h-screen">
                  <Header />
                  <div className="hidden md:flex lg:flex w-96 sticky top-0 shadow-lg overflow-visible">
                    <Sidebar showMenu={false} />
                  </div>
                  <div className="flex-grow">
                    <Home title={"Hi! 👋" + titleSuffix} />
                    <div className="md:hidden lg:hidden items-center justify-center min-h-screen hero">
                      <div>
                        <Welcome />
                        <div className="mt-16">
                          <Social />
                        </div>
                      </div>
                    </div>
                    {/* <Posts /> */}
                  </div>
                </div>
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
