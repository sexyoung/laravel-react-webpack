import React from "react";
import { Route, DefaultRoute } from "react-router";
// import App from "../App";
import Home from "../app/pages/Home";

// import TemplateSelectionPage from './pages/TemplateSelectionPage';
// import PersonalInfoPage from './pages/PersonalInfoPage';

const routes = (
  <Route name="home" path='/'>
    <DefaultRoute handler={Home} />
    {/* <Route name="markupEditor" path="markup-editor" handler={MarkupEditor} />*/}
	{/* 這邊我先幫小josh改到這個路徑 */}
    {/* <Route name="templateSelectionPage" path="/templateSelectionPage" handler={TemplateSelectionPage} /> */}
  </Route>
);

export default routes;
