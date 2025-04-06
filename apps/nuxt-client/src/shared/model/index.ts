import type { z } from 'zod'
import type { users } from '~/server/models'
import type { usersGetOneDto } from '~/server/api/users/get-one'

export type UsersResponse = typeof users.$inferSelect
export type UsersGetOneDto = z.infer<typeof usersGetOneDto>
