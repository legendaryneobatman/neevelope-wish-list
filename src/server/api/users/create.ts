import { z } from 'zod'
import { publicProcedure } from '~/server/trpc/trpc'
import { users } from '~/server/models'

export const create = publicProcedure
  .input(
    z.object({
      username: z.string(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    const [user] = await ctx.db.insert(users).values({ username: input.username }).returning()

    return user
  })
