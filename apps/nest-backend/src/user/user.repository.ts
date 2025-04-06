import { BaseRepository } from '../common/repositories/base.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { DrizzleService } from '../db/db.service';
import { users } from '../models';
import { eq } from 'drizzle-orm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository
  implements BaseRepository<UserEntity, CreateUserDto, UpdateUserDto>
{
  constructor(private readonly drizzleService: DrizzleService) {}

  async create(data: CreateUserDto): Promise<UserEntity> {
    const [user] = await this.drizzleService.db
      .insert(users)
      .values({ username: data.username })
      .returning();

    return user;
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.drizzleService.db.query.users.findMany({
      orderBy: (users, { asc }) => [asc(users.id)],
    });

    return users;
  }

  async findOne(id: number): Promise<UserEntity | null> {
    const result = await this.drizzleService.db.query.users.findFirst({
      where(fields, operators) {
        return operators.eq(fields.id, id);
      },
    });

    return result || null;
  }

  async remove(id: number): Promise<UserEntity | void> {
    if (await this.exists(id)) {
      this.drizzleService.db.delete(users).where(eq(users.id, id));
      return;
    } else {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, data: UpdateUserDto): Promise<UserEntity[]> {
    const [userToEdit] = await this.drizzleService.db
      .select()
      .from(users)
      .where(eq(users.id, id));

    if (userToEdit) {
      return this.drizzleService.db
        .update(users)
        .set({ username: data.username })
        .where(eq(users.id, id))
        .returning();
    } else {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }

  async exists(id: number): Promise<boolean> {
    const [userToEdit] = await this.drizzleService.db
      .select()
      .from(users)
      .where(eq(users.id, id));

    return !!userToEdit;
  }
}
