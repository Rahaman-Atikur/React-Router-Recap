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
import Posts from './Components/Posts/Posts.jsx';
import PostDetail from './Components/PostDetail/PostDetai.jsx';
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
        path: "users/:userId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: "posts",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts`),
        Component: Posts
      },
      {
        path: "posts/:postId",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail
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
