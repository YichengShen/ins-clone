import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StoreContextProvider from "contexts/StoreContext";

import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Explore from "./Explore.js";
import NewPost from "./NewPost.js";
import Activity from "./Activity.js";
import Profile from "./Profile.js";

import css from "./App.module.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <StoreContextProvider>
        <div className={css.container}>
          <Header />
          <main className={css.content}>
            <Switch>
              <Route path="/explore">
                <Explore />
              </Route>
              <Route path="/newpost">
                <NewPost />
              </Route>
              <Route path="/activity">
                <Activity />
              </Route>
              <Route path="/profile/:userId?">
                <Profile />
              </Route>
              <Route path="/:postId?">
                <Home />
              </Route>
            </Switch>
          </main>
          <Navbar />
        </div>
      </StoreContextProvider>
    </Router>
  );
}

export default App;
