import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { PrismaService } from '../prisma/prisma.service';
import { ReviewEntity } from './review.entity';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Review } from '.prisma/reviews-client';

@Injectable()
export class ReviewRepository implements CRUDRepository<ReviewEntity, number, Review> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: ReviewEntity): Promise<Review> {
    const entityData = item.toObject();
    return this.prisma.review.create({
      data: {
        ...entityData,
      },
    });
  }


  public findById(id: number): Promise<Review | null> {
    return this.prisma.review.findFirst({
      where: {
        id
      }
    });
  }

  public findByTaskId(taskId: number): Promise<Review | null> {
    return this.prisma.review.findFirst({
      where: {
        taskId
      }
    });
  }

  public findByContractorId(contractorId: string): Promise<Review[]> {
    return this.prisma.review.findMany({
      where: {
        contractorId: contractorId,
      },
    });
  }

  public async getContractorRatingSum (contractorId: string): Promise<number> {
    const ratingSum = await this.prisma.review.aggregate({
      _sum: {
        rating: true,
      },
      where: {
        contractorId: contractorId,
        },
    });
    return ratingSum._sum.rating;
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.review.delete({
      where: {
        id,
      }
    });
  }

  public async destroyByContractorId(contractorId: string): Promise<void> {
    await this.prisma.review.deleteMany({
      where: {
        contractorId,
      }
    });
  }

  public update(reviewId: number, item: ReviewEntity): Promise<Review> {
    return Promise.resolve(undefined);
  }
}
