import {publicProcedure} from "~/server/trpc/trpc";
import {TRPCError} from "@trpc/server";
import {users} from "~/server/api/user/db";

export const getUserById = publicProcedure
    .input((val: unknown) => {
        if (typeof val === 'string') return val

        throw new TRPCError({
            code: 'BAD_REQUEST',
            message: `Invalid input: ${typeof val}`,
        })
    })
    .query((req) => {
        const {input} = req

        const user = users.find((u) => u.id === input)

        if (!user) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `User with ID ${input} not found`,
            })
        }

        return user
    })
