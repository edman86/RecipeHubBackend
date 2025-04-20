import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto) {
    const user = await this.usersRepository.findOne({
      where: { id: createRecipeDto.userId },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const recipe = this.recipesRepository.create({
      ...createRecipeDto,
      user,
    });

    return this.recipesRepository.save(recipe);
  }

  findAll() {
    return `This action returns all recipes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
