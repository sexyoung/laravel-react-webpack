import React from "react";
import { Route, DefaultRoute } from "react-router";
// import App from "../App";
import Home from "../app/pages/Home";
import About from "../app/pages/About";
import Photo from "../app/pages/Photo";

// import TemplateSelectionPage from './pages/TemplateSelectionPage';
// import PersonalInfoPage from './pages/PersonalInfoPage';

const routes = (
  <Route name="home" path='/'>
    <DefaultRoute handler={Home} />
    <Route name="about" path="about" handler={About} />
    <Route name="photo" path="photo" handler={Photo} />
  </Route>
);

export default routes;
