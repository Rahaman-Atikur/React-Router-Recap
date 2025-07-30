import { StrictMode, Suspense } from 'react'
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
import Users from './Components/Users/Users.jsx';
import UsersTwo from './Components/Users/UsersTwo.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "Home", Component: Home },
      { path: "laptop", Component: Laptop },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: "usersTwo",
        element: <Suspense><span>Loading...</span>
          <UsersTwo userPromise={userPromise}></UsersTwo>
        </Suspense>
      },
      {
        path: "user/userId",
        loader:({params})=> fetch("https://jsonplaceholder.typicode.com/users"),
        Component: <UserDetails></UserDetails>
      }
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
