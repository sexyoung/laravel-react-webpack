import ReactRouter from "react-router";
import routes from "./routes";

const router = ReactRouter.create({
  location: ReactRouter.HashLocation,
  routes: routes
});

export default router;
