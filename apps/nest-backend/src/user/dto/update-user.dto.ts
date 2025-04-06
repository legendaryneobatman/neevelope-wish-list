import { createZodDto } from 'nestjs-zod';
import { usersSelectSchema } from '../../models';

export const usersEdit = usersSelectSchema.pick({
  id: true,
  username: true,
});

export class UpdateUserDto extends createZodDto(usersEdit) {}
