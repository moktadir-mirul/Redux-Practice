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
        onSuccess: () => {
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
            onSuccess: () => {
                queryClient.invalidateQueries(["notes"])
            }
    });
    return {updateMutation}
}