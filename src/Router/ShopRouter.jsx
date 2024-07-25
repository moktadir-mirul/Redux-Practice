import { createBrowserRouter } from "react-router-dom";
import { PostLayout } from "../Pages/Outlet";
import { Shop } from "../Pages/Shop";
import { Cart } from "../Pages/Cart";
import { PostName } from "../Pages/PostName";
import { PostDescription } from "../Pages/PostDescription";
import { CounterWebApp } from "../Pages/CounterWebApp";


export const ShopRouter = createBrowserRouter([
    {path:"/", element: <PostLayout />, children: [
        {path: "/", index: true, element: <Shop />},
        {path: "/Cart", element: <Cart />},
        {path: "/PostName", element: <PostName />},
        {path:"/PostName/:PostDetails", element: <PostDescription />},
        {path:"/counter", element: <CounterWebApp />}
    ]}
])