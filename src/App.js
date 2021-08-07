import React from "react";
import { Route } from "react-router-dom";
//pages and components
import Home from "./pages/Home";
import Nav from "./components/Nav";
//styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
