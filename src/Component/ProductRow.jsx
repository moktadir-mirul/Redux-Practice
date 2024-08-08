import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRemoveAProductMutation } from "../Store/QueryFeatures/Endpoints/productEndpoints";



export function ProductRow({ item }) {

    const queryClient = useQueryClient();

    const removeProduct = useMutation({
        mutationFn: (PID) => fetch(`http://localhost:3000/products/${PID}`, {
            method: "DELETE"
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['products']});
        }
    });

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