import { Injectable } from '@nestjs/common';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async create(createCategoryDto: CreateCategoriesDto) {
    return await this.categoriesRepository.create(createCategoryDto);
  }

  async findAll() {
    return await this.categoriesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.categoriesRepository.findOne(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoriesDto) {
    return await this.categoriesRepository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    return await this.categoriesRepository.remove(id);
  }
}
