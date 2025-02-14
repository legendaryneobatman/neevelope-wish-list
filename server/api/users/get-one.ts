import {publicProcedure} from "~/server/trpc/trpc";
import {usersSelectSchema} from "~/server/models";

export const usersGetOneDto = usersSelectSchema.pick({
    id: true,
})

export const getOne = publicProcedure
    .input(usersGetOneDto)
    .query(async ({input, ctx}) => {
        const user = await ctx.db.query.users.findFirst({
            where(fields, operators) {
                return operators.eq(fields.id, input.id)
            },
        })
        return user
    });
