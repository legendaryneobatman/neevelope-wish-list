import {create} from "~/server/api/users/create";
import {getMany} from "~/server/api/users/get-many";
import {getOne} from "~/server/api/users/get-one";
import {edit} from "~/server/api/users/edit";
import { router } from '~/server/trpc/trpc';

export const usersRouter = router({
    create,
    getMany,
    getOne,
    edit,
})
