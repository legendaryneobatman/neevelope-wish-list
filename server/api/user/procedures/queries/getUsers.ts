import {publicProcedure} from "~/server/trpc/trpc";
import {users} from "~/server/api/user/db";

export const getUsers = publicProcedure.query(({ctx}) => {
    return users
})
