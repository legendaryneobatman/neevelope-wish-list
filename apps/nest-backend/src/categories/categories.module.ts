import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { UserRepository } from '../user/user.repository';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, UserRepository],
})
export class CategoriesModule {}
