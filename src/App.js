import React, { Fragment } from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "./context/Context";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Books from "./components/Books";
import About from "./components/About";
import Cart from "./components/Cart";
import BookDetails from "./components/BookDetails";


function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => (
              <>
                <Header />
                <Books />
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/book-cart" component={Cart} />
          <Route path="/book/details/:id" component={BookDetails} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
