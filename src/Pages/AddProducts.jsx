import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../Store/Reducers/ProductThunk";




export const AddProduct = () => {

    const dispatch = useDispatch();

    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        image: '',
    })

    const ChangeHandler = (event) => {
        setProduct({...product, [event.target.name]: event.target.value})
    }

    const SubmitHandler = (incident) => {
        incident.preventDefault();
        dispatch(createProduct(product));   
        setProduct({title: '', description: '', price: '', image: ''}) 
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
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
                    onChange={ChangeHandler}
				/>
				<br />
				<p>Description</p>
				<input
					type="text"
					name="description"
					required
					style={{ display: "block", width: "70%" }}
                    onChange={ChangeHandler}
				/>
				<br />
				<p>Price</p>
				<input
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
                    onChange={ChangeHandler}
				/>
				<br />
				<p>Image</p>
				<input
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