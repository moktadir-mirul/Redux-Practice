
import { CartItem } from "../Component/Cart-Item";
import { useSelector, useDispatch } from "react-redux";

export const Cart = () => {

	const cart = useSelector((state) => state.shop);
	const dispatch =useDispatch();

	let totalPrice = 0;
	cart.forEach((item) => (totalPrice += item.quantity * item.price));

    return (
        <div>
			<div className="account-setting__content">
				<div className="account-setting__content__title">
					<h4>Product list in your cart</h4>
				</div>
				<div className="product-table-container">
					<table>
						<thead>
							<tr>
								<th>Image</th>
								<th>PRODUCT Title</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Subtotal</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => (
								<CartItem key={item.id} item={item} />
							))}
						</tbody>
					</table>
				</div>
				<h2 className="total-price">
					You Total Price Will be <strong style={{fontWeight: 'bold', fontSize: '20px'}}>${totalPrice} </strong>
				</h2>
				<div className="mt-50">
					<button
						type="button"
						className="btn-big"
						onClick={() => dispatch({type:'CLEAR-CART'})}
					>
						Clear Cart
					</button>
				</div>
			</div>           
        </div>
    )
}