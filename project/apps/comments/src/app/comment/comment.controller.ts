import { Body, Controller, Post, Get, Delete, HttpCode, HttpStatus, Param, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { fillObject } from '@project/util/util-core';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentRdo } from './rdo/comment.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentQuery } from './query/comment.query';

@ApiTags('comments')
@Controller('comments')
export class CommentController {
  constructor(
    private readonly commentService: CommentService
  ) {}

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.CREATED,
    description: 'The new comment has been successfully created.'
  })
  @Post('create')
  public async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.commentService.create(dto);
    return fillObject(CommentRdo, newComment);
  }

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.OK,
    description: 'The comment found.'
  })
  @Get(':id')
  public async get(@Param('id') id: number) {
    const existComment = await this.commentService.getComment(id);

    return fillObject(CommentRdo, existComment);
  }

  @Get('/')
  async index(@Query() query: CommentQuery) {
    const comments = await this.commentService.getComments(query);
    return fillObject(CommentRdo, comments);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The comment has been successfully deleted.'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: number) {
    await this.commentService.delete(id);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Comments have been successfully deleted.'
  })
  @Delete('/:taskId')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteComments(@Param('taskId') taskId: number) {
    await this.commentService.deleteComments(taskId);
  }

}
