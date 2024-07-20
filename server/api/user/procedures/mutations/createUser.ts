import {publicProcedure} from "~/server/trpc/trpc";
import {z} from "zod";
import {User, users} from "~/server/api/user/db";

export const createUser = publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation((req) => {
        const { input } = req

        const user: User = {
            id: `${Date.now().toString(36).slice(2)}`,
            name: input.name,
        }

        users.push(user)

        return user
    })
