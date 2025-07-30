import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptop from './Components/Laptop/laptop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "Home", Component: Home },
      { path: "laptop", Component: Laptop },
    ]
  },
  {
    path: "/About",
    element: <div>About</div>,
  },
  {
    path: "/Home",
    element: <div>Home</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
