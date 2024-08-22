import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


export const useGetAllProducts = () => {
    const {isFetching, isError, error, data: products} = useQuery({
		queryKey: ['products'],
		queryFn: () => fetch('http://localhost:3000/products')
		.then((res) => res.json()),
		refetchOnMount: true
	});

    return {
        isFetching,
        isError,
        error,
        products
    }
}

export const useAddProduct = () => {
    const queryClient = useQueryClient();
	const addProduct = useMutation({
		mutationFn: (object) => fetch('http://localhost:3000/products', {
			method: "POST",
			body: JSON.stringify(object),
			headers: {'content-type' : 'application/json'}
		}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['products']});
		}
	});
    return {
        addProduct
    }   
}

export const useRemoveProduct = () => {
    const queryClient = useQueryClient();
    const removeProduct = useMutation({
        mutationFn: (PID) => fetch(`http://localhost:3000/products/${PID}`, {
            method: "DELETE"
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["products"]})
        }
    })
    return {
        removeProduct
    }
}
