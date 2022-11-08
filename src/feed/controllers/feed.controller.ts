import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { FeedPost } from '../entities/post.interface';
import { FeedService } from '../services/feed.service';
import { Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()                                                    // POST 방식으로 데이터 전달
  async create(@Body() feedPost: FeedPost) {
    return await this.feedService.setPost(feedPost);
  }

  @Get()
  findAll(): Observable<FeedPost[]> {
    return this.feedService.findAllPosts();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() feedPost: FeedPost): Observable<UpdateResult> {
    return this.feedService.updatePost(id, feedPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
}
