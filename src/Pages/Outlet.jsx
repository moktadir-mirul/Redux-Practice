import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";


export const PostLayout= () => {
    return(
        <div>
            <Nav />
            <Outlet />
        </div>
    )
}