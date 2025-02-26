import { router } from '~/server/trpc/trpc';
import { usersRouter } from '~/server/trpc/routers/userRouter';
import { catalogueRouter } from '~/server/trpc/routers/catalogueRouter';

export const appRouter = router({
    users: usersRouter,
    catalogue: catalogueRouter
})

export type AppRouter = typeof appRouter
