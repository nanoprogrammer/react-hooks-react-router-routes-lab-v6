import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie"; // Updated from Movies to Movie

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />, // Updated from Movies to Movie
  },
];

export default routes;
