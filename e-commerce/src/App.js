import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Collections from "./Collections";
import Men from "./Men";
import Women from "./Women";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/Collections" component={Collections} />
        <Route path="/Men" component={Men} />
        <Route path="/Women" component={Women} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Router>
      <Product />
    </div>
  );
}

export default App;