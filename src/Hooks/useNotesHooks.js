import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"



export const useGetAllNotes = () => {
   const {isFetching, isError, error, data: notes} = useQuery({
            queryKey: ["notes"],
            queryFn: () => fetch(`http://localhost:3000/notes`)
                            .then((res) => res.json())
   })
   return{
            isFetching,
            isError,
            error,
            notes
   }
}

export const useCreateNote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (note) => fetch(`http://localhost:3000/notes`, {
            method: "POST",
            body: JSON.stringify(note),
            headers: {'content-type' : 'application/json'}
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["notes"]})
        }
    })
    
} 

export const useRemoveMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (NID) => fetch(`http://localhost:3000/notes/${NID}`, {
            method: "DELETE",
        }),
        onMutate: async (NID) => {
            await queryClient.cancelQueries(["notes"]);
            const prevData = queryClient.getQueryData(["notes"]);
            queryClient.setQueryData(["notes"], (oldData) => {
                return oldData.filter((item) => item.id !== NID)
            })
            return {prevData}
        },
        onError: (err, variable, context) => {
            queryClient.setQueryData(["notes"], () => context.prevData)
        },
        onSettled: () => {
            queryClient.invalidateQueries(["notes"])
        }

    })
    
}

export const useUpdateMutation = () => {
    const queryClient = useQueryClient();
    const updateMutation = useMutation({
        mutationFn: ({id, note}) => fetch(`http://localhost:3000/notes/${id}`,
            {
                method: "PUT",
                body: JSON.stringify(note),
                headers: {'content-type' : 'application/json'}
            }),
            onMutate: async ({id, note}) => {
                await queryClient.cancelQueries(["notes"]);
                const prevData = queryClient.getQueryData(["notes"]);
                queryClient.setQueryData(["notes"], (oldData) => {
                    return oldData.map((item) => {
                        if(item.id === id) {
                            return {...item, isComplete: !item.isComplete}
                        } 
                        return item;
                    });
                })
                return {prevData};
            },
            onError: (err, variables, context) => {
                queryClient.setQueryData(["notes"], () => context.prevData)
            },
            onSettled: () => {
                queryClient.invalidateQueries({queryKey : ["notes"]})
            }

    });
    return {updateMutation}
}