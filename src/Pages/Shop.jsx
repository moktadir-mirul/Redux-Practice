import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "../Component/ProductCard";
import { useGetAllProductsQuery } from "../Store/QueryFeatures/Endpoints/productEndpoints";
import { useGetAllProducts } from "../Hooks/useProductsHook";


export const Shop = () => {
    
	const {isFetching, isError, error, products} = useGetAllProducts()

	if(isFetching) {
		return <h2>Data is Loading.......</h2>
	}
	if (isError) {
		return <h2>{error.message}</h2>
	}
    return(
		
		<div>
			<div className="page-banner">
				<div className="page-banner__details">
					<div className="page-banner__details__title">
						<h1>Our E-commerce Website</h1>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="container">
					<div className="section__head">
						<div className="product__details__title">
							<h2>All Products</h2>
						</div>
					</div>
					<div className="section__content">
						<div className="grid three">
                            {products?.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}