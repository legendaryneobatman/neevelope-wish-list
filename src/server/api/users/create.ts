import {publicProcedure} from "~/server/trpc/trpc";
import {z} from "zod";
import {users} from "~/server/models";

export const create = publicProcedure
    .input(
        z.object({
            firstName: z.string()
        })
    )
    .mutation(async( {input, ctx}) => {
        const [user] = await ctx.db.insert(users).values({firstName: input.firstName}).returning();

        return user
    })
