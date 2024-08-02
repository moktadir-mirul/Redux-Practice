

export function ProductRow({ item }) {
    
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
                <button>X</button>
            </td>
        </tr>
    );
}