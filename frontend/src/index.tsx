import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import SharedLayout from "./components/SharedComponents/SharedLayout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/users" />,
      },
      { path: "/users", element: <Users /> },
      { path: "/users/:id", element: <UserProfile /> },
      { path: "*", element: <Navigate to="/users/" /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
