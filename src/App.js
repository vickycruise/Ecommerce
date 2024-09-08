import "./App.css";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Router from "./Routes/Router";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
