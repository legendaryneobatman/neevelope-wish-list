interface IBaseRepository<TModel, TCreateDto, TUpdateDto> {
  create(data: TCreateDto): Promise<TModel>;
  findAll(): Promise<TModel[]>;
  findOne(id: number): Promise<TModel | null>;
  update(id: number, data: TUpdateDto): Promise<TModel[] | void>;
  remove(id: number): Promise<TModel | void>;
  exists(id: number): Promise<boolean>;
}

export abstract class BaseRepository<TModel, TCreateDto, TUpdateDto>
  implements IBaseRepository<TModel, TCreateDto, TUpdateDto>
{
  abstract create(data: TCreateDto): Promise<TModel>;

  abstract findAll(): Promise<TModel[]>;

  abstract findOne(id: number): Promise<TModel | null>;

  abstract remove(id: number): Promise<TModel | void>;

  abstract update(id: number, data: TUpdateDto): Promise<TModel[]>;

  abstract exists(id: number): Promise<boolean>;
}
