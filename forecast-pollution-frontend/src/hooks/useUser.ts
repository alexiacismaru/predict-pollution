// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { Login, User } from "../model/User.ts";
// import { createUser, login } from "../services/API";

// export function useUser({ username, password }: Login) {
//     const queryClient = useQueryClient();
//     const { isLoading, isError, data: user } = useQuery({
//         queryKey: ['user', username, password],
//         queryFn: () => login({ username, password })
//     });

//     const {
//         mutate: addUser,
//         isLoading: isAddingUser,
//         isError: isErrorAddingUser,
//     } = useMutation((item: Omit<User, 'id'>) => createUser(item), {
//         onSuccess: () => {
//             queryClient.invalidateQueries(['user'])
//         },
//     });

//     return {
//         isLoading,
//         isError,
//         user,
//         addUser,
//         isAddingUser,
//         isErrorAddingUser,
//     }
// }
