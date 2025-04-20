import { IsNumber, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  description: string;

  @IsString()
  ingredients: string;

  @IsString()
  instructions: string;

  @IsNumber()
  preparationTime: number;

  @IsNumber()
  cookingTime: number;

  @IsNumber()
  servings: number;

  @IsString()
  image: string;

  @IsNumber()
  userId: number;
}
