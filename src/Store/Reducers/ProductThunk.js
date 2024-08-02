import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const primaryValue = {
                        isLoading: true,
                        products: [],
                        errorMessage: '',
                        }

export const fetchProduct = createAsyncThunk('products/fetchProduct', 
    async () => {
        const response = await fetch ('http://localhost:3000/products');
        const data = response.json();
        return data;
    }
)

export const ProductSlice = createSlice({
    name: 'product',
    initialState: primaryValue,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.errorMessage = '';
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.errorMessage = action.error.message;
        })
    }

})