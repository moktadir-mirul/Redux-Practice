import { Link } from "react-router-dom";

export const Nav= () => {
    return(
        <div>
            <ul id="ulID1">
                <li><Link to={"/"}>Shop</Link></li>
                <li><Link to={"/Cart"}>Cart</Link></li>
                {/* <li><Link to={"/PostName"}>Post Name</Link></li> */}
                <li><Link to={"/counter"}>Counter</Link></li>
            </ul>
        </div>
    )
}