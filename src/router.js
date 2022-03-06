import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./views/landing/Landing";
import Pokedex from "./views/pokedex/Pokedex";
import PokeGrid from "./views/grid/PokeGrid";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/pokegrid" component={PokeGrid} />
        <Route exact path="/pokedex/:id" component={Pokedex} />
      </Switch>
    </BrowserRouter>
  );
};

export default MyRouter;
