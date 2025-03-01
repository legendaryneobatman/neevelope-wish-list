import type { z } from 'zod'
import { eq } from 'drizzle-orm'
import { TRPCError } from '@trpc/server'
import { users, usersSelectSchema } from '~/server/models'
import { publicProcedure } from '~/server/trpc/trpc'

export const usersEdit = usersSelectSchema.pick({
  id: true,
  username: true,
})

export type UsersEditDto = z.infer<typeof usersEdit>

export const edit = publicProcedure
  .input(usersEdit)
  .mutation(async ({ input, ctx: { db } }) => {
    console.log(input)
    const [userToEdit] = await db.select().from(users).where(eq(users.id, input.id))
    if (userToEdit) {
      const result = await db.update(users).set({ username: input.username }).where(eq(users.id, input.id)).returning()

      return result
    }
    else {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'user with matched id is not found',
      })
    }
  })
