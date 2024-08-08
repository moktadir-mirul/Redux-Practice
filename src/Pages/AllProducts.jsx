import { useQuery } from "@tanstack/react-query";
import { ProductList } from "../Component/ProductList";
import { useGetAllProductsQuery } from "../Store/QueryFeatures/Endpoints/productEndpoints";;




export const AllProducts = () => {
    const {data : products} = useQuery({
		queryKey: ['products'],
		queryFn: () => fetch('http://localhost:3000/products')
		.then((res) => res.json()),
		refetchOnMount: true
	})

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