import React from "react";
import DeleteButton from "./components/buttons/DeleteButton/DeleteButton";
import TrashButton from "./Components/Buttons/TrashButton/TrashButton";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./App.css";
// import Carousels2 from "./Components/Carousels1/Carousels2";
import Carousels2 from "./Components/Carousels2/Carousels2";
import AutoSuggestExample from "./Components/controls/AutoSuggest/AutoSuggest";

const routes = [
  {
    name: "DeleteButton",
    path: "/buttons/delete-button",
    element: <DeleteButton />,
  },
  {
    name: "TrashButton",
    path: "/buttons/trash-button",
    element: <TrashButton />,
  },

  {
    name: "Carousels1",
    path: "/src/Components/Carousels1/Carousels2.jsx",
    element: <Carousels2 />,
  },
  {
    name: "AutoSuggest",
    path: "/controls/auto-suggest",
    element: <AutoSuggestExample />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  ...routes,
]);

function Layout() {
  return (
    <main className="app">
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.name}
        </Link>
      ))}
    </main>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
