import { createBrowserRouter } from "react-router-dom";

import { Shop } from "../Pages/Shop";
import { Cart } from "../Pages/Cart";
// import { PostName } from "../Pages/PostName";
// import { PostDescription } from "../Pages/PostDescription";
// import { CounterWebApp } from "../Pages/CounterWebApp";
import { PostLayout } from "../Pages/Outlet";
import { CounterApp } from "../Pages/CounterApp";
import { PostsHeading } from "../Pages/PostsHeading";
import { PostDetails } from "../Pages/PostDetails";


export const ShopRouter = createBrowserRouter([
    {path:"/", element: <PostLayout />, children: [
        {path: "/", index: true, element: <Shop />},
        {path: "/Cart", element: <Cart />},
        // {path: "/PostName", element: <PostName />},
        // {path:"/PostName/:PostDetails", element: <PostDescription />},
        {path:"/counter", element: <CounterApp />},
        {path: "/posts", element: <PostsHeading />},
        {path: "/posts/:details", element: <PostDetails />}
    ]}
])