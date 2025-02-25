import { useQuery } from "@tanstack/react-query";
import { ProductList } from "../Component/ProductList";
import { useGetAllProductsQuery } from "../Store/QueryFeatures/Endpoints/productEndpoints";
import { useGetAllProducts } from "../Hooks/useProductsHook";





export const AllProducts = () => {
    const {products} = useGetAllProducts()

	return (
		<main>
			<div>
				<div className="product-section">
					<div className="product-section__heading">
						<h4>Product list in your app</h4>
					</div>
					<div className="product-table-container">
						<table>
                            <ProductList products={products} />
						</table>
					</div>
				</div>
			</div>
		</main>
	);
}