import {router} from "~/server/trpc/trpc";
import {getUsers} from "~/server/api/user/procedures/queries/getUsers";
import {getUserById} from "~/server/api/user/procedures/queries/getUserById";
import {createUser} from "~/server/api/user/procedures/mutations/createUser";

const userRouter = router({
    getUsers,
    getUserById,
    createUser
})

export default userRouter
