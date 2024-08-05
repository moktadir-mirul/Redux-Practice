import { ProductRow } from "./ProductRow";




export const ProductList = ({products}) => {
    
	return (
		<tbody>
            {
                products?.length !== 0 && products?.map((item) => (
                    <ProductRow key={item.id} item={item} />
                ))
            }
		</tbody>
	);
}