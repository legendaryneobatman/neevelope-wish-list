import { z } from 'zod'
import { publicProcedure, router } from '~/server/trpc/trpc'
import userRouter from "~/server/api/user/router";

export const appRouter = router({
    hello: publicProcedure
        .input(
            z.object({
                text: z.string().nullish(),
            }),
        )
        .query(({ input }) => {
            return {
                greeting: `hello ${input?.text ?? 'world'}`,
            }
        }),
    user: userRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
