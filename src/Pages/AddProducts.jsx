import { useState } from "react";
import { useCreateAProductMutation } from "../Store/QueryFeatures/ApiQuery";



const Value = {
					title: '',
					description: '',
					price: '',
					image: '',
				}
export const AddProduct = () => {

	const [addProduct] = useCreateAProductMutation();

    const [product, setProduct] = useState(Value);

    const ChangeHandler = (event) => {
        setProduct({...product, [event.target.name]: event.target.value})
    }

    const SubmitHandler = (incident) => {
        incident.preventDefault();
		addProduct(product);
		setProduct(Value);
    }

    return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
                onSubmit={SubmitHandler}
			>
				<p>Title</p>
				<input
					value={product.title}
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
                    onChange={ChangeHandler}
				/>
				<br />
				<p>Description</p>
				<input
					value={product.description}
					type="text"
					name="description"
					required
					style={{ display: "block", width: "70%" }}
                    onChange={ChangeHandler}
				/>
				<br />
				<p>Price</p>
				<input
					value={product.price}
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
                    onChange={ChangeHandler}
				/>
				<br />
				<p>Image</p>
				<input
					value={product.image}
					type="text"
					name="image"
					required
					style={{ display: "block", width: "70%" }}
                    onChange={ChangeHandler}
				/>
				<input type="submit" />
			</form>
		</>
	);
} 