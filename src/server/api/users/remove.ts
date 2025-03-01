import type { z } from 'zod'
import { eq } from 'drizzle-orm'
import { TRPCError } from '@trpc/server'
import { publicProcedure } from '~/server/trpc/trpc'
import { users, usersSelectSchema } from '~/server/models'

export const usersRemove = usersSelectSchema.pick({
  id: true,
})

export type UsersRemoveDto = z.infer<typeof usersRemove>

export const remove = publicProcedure
  .input(usersRemove)
  .mutation(async ({ input, ctx: { db } }) => {
    const [userToEdit] = await db.select().from(users).where(eq(users.id, input.id))

    if (userToEdit) {
      return await db.delete(users).where(eq(users.id, input.id))
    }
    else {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'user with matched id is not found',
      })
    }
  })
