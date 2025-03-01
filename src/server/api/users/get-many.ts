import { publicProcedure } from '~/server/trpc/trpc'

export const getMany = publicProcedure
  .query(({ ctx }) => {
    return ctx.db.query.users.findMany({
      orderBy: (users, { asc }) => [asc(users.id)],
    })
  })
