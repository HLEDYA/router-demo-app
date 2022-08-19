// A simple app that uses react router
// npm install react-router-dom@5

import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;

// our-domain.com/ => Component A
// our-domain.com/products => Component B
