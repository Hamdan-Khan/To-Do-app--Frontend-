import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Add from "./pages/Add";
// import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Add = lazy(() => import("./pages/Add"));

const App = () => {
  return (
    <div className="relative">
      <BrowserRouter>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/add" element={<Add />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
