import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeatMap from "../Components/HeatMap/Heat";
import GlobalChart from "../Components/Charts/GlobalChart";
import LandingPage from "../LandingPage";


export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/LandingPage" component={LandingPage} />
      <Route path="/GlobalChart" component={GlobalChart} />
      <Route path="/HeatMap" component={HeatMap} />
    </Switch>
  </BrowserRouter>
);
