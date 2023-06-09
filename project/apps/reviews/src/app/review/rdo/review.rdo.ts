import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class ReviewRdo {
  @ApiProperty({
    description: 'Уникальный идентификатор отзыва.',
    example: '10'
  })
  @Expose({name: 'id'})
  public id: number;

  @ApiProperty({
    description: 'Текст отзыва.',
    example: 'Нраица, очень нраица.',
  })
  @Expose()
  public review: string;

  @ApiProperty({
    description: 'Уникальный идентификатор задания.',
    example: 'd913b9e8-9ff5-4528-8fc6-4d0ffd1e0ad3'
  })
  @Expose()
  public taskId: number;

  @ApiProperty({
    description: 'Оценка исполнителя. Число от 1 до 5.',
    example: '5'
  })
  @Expose()
  public rating: number;

  @ApiProperty({
    description: 'Уникальный идентификатор пользователя.',
    example: 'd913b9e8-9ff5-4528-8fc6-4d0ffd1e0ad3'
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'Уникальный идентификатор исполнителя.',
    example: 'd913b9e8-9ff5-4528-8fc6-4d0ffd1e0ad3'
  })
  @Expose()
  public contractorId: string;

  @ApiProperty({
    description: 'Дата создания.',
    example: '2023-03-27'
  })
  @Expose()
  public createdAt: Date;
}
