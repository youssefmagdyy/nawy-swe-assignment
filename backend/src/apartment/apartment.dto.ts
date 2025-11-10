import { IsString, IsNumber, IsOptional, IsUrl, Min, IsInt, IsPositive, IsArray } from "class-validator";
import { Type } from "class-transformer";

export class CreateApartmentDto {
  @IsString()
  unitName!: string;

  @IsString()
  unitNumber!: string;

  @IsString()
  project!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsInt()
  @Min(0)
  bedrooms!: number;

  @IsInt()
  @Min(0)
  bathrooms!: number;

  @IsNumber()
  @Min(1)
  area!: number;

  @IsString()
  description!: string;

  @IsArray()
  images!: string[];
}

export class ApartmentFilterDto {
  @IsOptional()
  @IsString()
  unitName?: string;

  @IsOptional()
  @IsString()
  unitNumber?: string;

  @IsOptional()
  @IsString()
  project?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  bedrooms?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  bathrooms?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  minPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  maxPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  minArea?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  maxArea?: number;
}
