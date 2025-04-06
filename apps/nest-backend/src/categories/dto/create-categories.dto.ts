import { createZodDto } from 'nestjs-zod';

import { categoriesSelectSchema } from '../../models';

export const categoryCreateDto = categoriesSelectSchema.pick({
  name: true,
  path: true,
});

export class CreateCategoriesDto extends createZodDto(categoryCreateDto) {}
