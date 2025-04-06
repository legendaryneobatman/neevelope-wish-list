import { BaseRepository } from '../common/repositories/base.repository';
import { CategoriesEntity } from './entities/categories.entity';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';
import { DrizzleService } from '../db/db.service';
import { categories } from '../models';
import { eq } from 'drizzle-orm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesRepository
  implements
    BaseRepository<CategoriesEntity, CreateCategoriesDto, UpdateCategoriesDto>
{
  constructor(private drizzleService: DrizzleService) {}
  async create(data: CreateCategoriesDto): Promise<CategoriesEntity> {
    const [createdCategory] = await this.drizzleService.db
      .insert(categories)
      .values({ name: data.name, path: data.path })
      .returning();

    const [result] = await this.drizzleService.db
      .update(categories)
      .set({ url: `/${createdCategory.path}-${createdCategory.id}` })
      .where(eq(categories.id, createdCategory.id))
      .returning();

    return result;
  }

  async findAll(): Promise<CategoriesEntity[]> {
    const categories = await this.drizzleService.db.query.categories.findMany({
      orderBy: (categories, { asc }) => [asc(categories.id)],
    });

    return categories;
  }

  async findOne(id: number): Promise<CategoriesEntity | null> {
    const result = await this.drizzleService.db.query.categories.findFirst({
      where(fields, operators) {
        return operators.eq(fields.id, id);
      },
    });

    return result || null;
  }

  async remove(id: number): Promise<void | CategoriesEntity> {
    if (await this.exists(id)) {
      this.drizzleService.db.delete(categories).where(eq(categories.id, id));
    } else {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }

  async update(
    id: number,
    data: UpdateCategoriesDto,
  ): Promise<CategoriesEntity[]> {
    const [categoriesToEdit] = await this.drizzleService.db
      .select()
      .from(categories)
      .where(eq(categories.id, id));

    if (categoriesToEdit) {
      return this.drizzleService.db
        .update(categories)
        .set({
          name: data?.name,
          path: data?.path,
        })
        .where(eq(categories.id, id))
        .returning();
    } else {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }

  async exists(id: number): Promise<boolean> {
    const [categoriesFound] = await this.drizzleService.db
      .select()
      .from(categories)
      .where(eq(categories.id, id));

    return !!categoriesFound;
  }
}
