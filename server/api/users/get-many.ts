import {publicProcedure} from "~/server/trpc/trpc";
import {users} from "~/server/models";

export const getMany = publicProcedure
    .query(async ({ctx}) => {
        return ctx.db.select().from(users)
    })
