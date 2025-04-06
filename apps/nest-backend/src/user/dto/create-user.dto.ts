import { createZodDto } from 'nestjs-zod';
import { usersSelectSchema } from '../../models';

export const usersEdit = usersSelectSchema.pick({
  username: true,
});

export class CreateUserDto extends createZodDto(usersEdit) {}
