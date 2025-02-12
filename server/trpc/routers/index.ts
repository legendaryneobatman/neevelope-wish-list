import {router} from '../trpc'
import {create} from "~/server/api/users/create";
import {getMany} from "~/server/api/users/get-many";
import {getOne} from "~/server/api/users/get-one";
import {edit} from "~/server/api/users/edit";

const usersRouter = router({
    create,
    getMany,
    getOne,
    edit,
})

export const appRouter = router({
    users: usersRouter,
})

export type AppRouter = typeof appRouter
