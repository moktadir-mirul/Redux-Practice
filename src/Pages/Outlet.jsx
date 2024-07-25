import { Outlet } from "react-router-dom";
import { Nav } from "../Components/Nav";


export const PostLayout= () => {
    return(
        <div>
            <Nav />
            <Outlet />
        </div>
    )
}