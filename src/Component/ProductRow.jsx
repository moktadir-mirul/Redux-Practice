import { useDispatch } from "react-redux";
import { removeProduct } from "../Store/Reducers/ProductThunk";

export function ProductRow({ item }) {
    
    const dispatch = useDispatch();

    const removeHandler = () => {
        dispatch(removeProduct(item.id));
    }

    return (
        <tr className="product-row d-flex justify-content-around align-items-center">
            <td>
                <img src={item.image} className="product-img" alt="" />
            </td>

            <td>
                <h2>{item.title}</h2>
            </td>
            <td>
                <h2>{item.price}</h2>
            </td>
            <td>
                <button onClick={removeHandler}>X</button>
            </td>
        </tr>
    );
}