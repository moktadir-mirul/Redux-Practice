import { useRemoveAProductMutation } from "../Store/QueryFeatures/Endpoints/productEndpoints";
import { useRemoveProduct } from "../Hooks/useProductsHook";



export function ProductRow({ item }) {

    const {removeProduct} = useRemoveProduct()

    const removeHandler = () => {
        removeProduct.mutate(item.id);
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