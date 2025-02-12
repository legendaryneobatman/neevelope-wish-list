import {publicProcedure} from "~/server/trpc/trpc";
import {z} from "zod";
import {users, usersSelectSchema} from "~/server/models";
import {eq} from "drizzle-orm";

export const usersGetOneDto = usersSelectSchema.pick({
    id: true,
})

export type UsersGetOneDto = z.infer<typeof usersGetOneDto>

export const getOne = publicProcedure
    .input(usersGetOneDto)
    .query(async ({input, ctx}) => {
        const [user] = await ctx.db.select().from(users).where(eq(users.id, input.id, ));

        return user
    });
