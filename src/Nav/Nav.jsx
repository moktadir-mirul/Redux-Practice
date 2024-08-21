import { Link } from "react-router-dom";

export const Nav= () => {
    return(
        <div>
            <ul id="ulID1">
                <li><Link to={"/"}>Shop</Link></li>
                <li><Link to={"/Cart"}>Cart</Link></li>
                <li><Link to={"/counter"}>Counter</Link></li>
                <li><Link to={"/AddProducts"}>Add a Product</Link></li>
                <li><Link to={"/AllProducts"}>All Products</Link></li>
                <li><Link to={"/AllNotes"}>All Notes</Link></li>
                <li><Link to={"/ClassExample"}>Class Component</Link></li>
            </ul>
        </div>
    )
}