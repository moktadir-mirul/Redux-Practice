import { createBrowserRouter } from "react-router-dom";

import { Shop } from "../Pages/Shop";
import { Cart } from "../Pages/Cart";
// import { PostName } from "../Pages/PostName";
// import { PostDescription } from "../Pages/PostDescription";
// import { CounterWebApp } from "../Pages/CounterWebApp";
import { PostLayout } from "../Pages/Outlet";
import { CounterApp } from "../Pages/CounterApp";
import { AddProduct } from "../Pages/AddProducts";
import { AllProducts } from "../Pages/AllProducts";
import { NoteList } from "../Pages/NoteList";


export const ShopRouter = createBrowserRouter([
    {path:"/", element: <PostLayout />, children: [
        {path: "/", index: true, element: <Shop />},
        {path: "/Cart", element: <Cart />},
        // {path: "/PostName", element: <PostName />},
        // {path:"/PostName/:PostDetails", element: <PostDescription />},
        {path:"/counter", element: <CounterApp />},
        {path: "/AddProducts", element: <AddProduct />},
        {path: "/AllProducts", element: <AllProducts />},
        {path: "/AllNotes", element: <NoteList />}
    ]}
])