import { router } from '~/server/trpc/trpc'
import { create, getMany, getOne, edit, remove } from '~/server/api/users'

export const usersRouter = router({
  create,
  getMany,
  getOne,
  edit,
  remove,
})
