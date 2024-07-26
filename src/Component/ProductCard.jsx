
import { useDispatch } from "react-redux";
import { addItem } from "../Store/Action-Creator/cartActions";

export const ProductCard = ({product}) => {
	
	const dispatch = useDispatch();

	const AddHandler = () => {
		dispatch(addItem(product))
		// alert(`${product.title} has been added to cart successfully`)
	}
    return (
		<div className="ingredient">
			<div className="ingredient__image">
				<figure>
					<img src={product.image} alt={product.title} />
				</figure>
			</div>
			<div className="ingredient__title">
				<h1 style={{fontWeight: 'bold', fontSize: '25px', marginBottom: '8px'}}>{product.title}</h1>
			</div>
            <div className="ingredient__description">
				<p>{product.description}</p>
			</div>
			<div className="ingredient__content">
				<p className="price">
					<span>${product.price}</span>
				</p>
			</div>
			<div className="ingredient__btn">
				<button
					className="btn-white"
					onClick={AddHandler}
					>
                        Add to Cart
				</button>
			</div>
		</div>
	);
}