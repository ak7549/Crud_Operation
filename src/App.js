import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Regis from "./pages/Regis";
import Footer from "./component/Footer";
import RegisData from "./pages/RegisData";
import RegisUpdate from "./pages/RegisUpdate";
import Getid from "./pages/Getid";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/regis" element={<Regis />}></Route>
          <Route exact path="/regisData" element={<RegisData />}></Route>
          <Route exact path="/regisUpdate" element={<RegisUpdate />}></Route>
          <Route exact path="/getId" element={<Getid />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
