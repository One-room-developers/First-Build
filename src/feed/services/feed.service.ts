import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';                      // 데이터베이스와 소통하는 레포지토리(Entity)를 만드는 데 필요한 라이브러리
import { FeedPost } from '../models/post.interface';
import { from, Observable } from 'rxjs';               // 비동기처리를 위한 라이브러리 (정확히 어떤 건지는 아직 모르겠음)

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)                  // 새로만든 레포지토리(Entity) 사용.
    private readonly feedPostRepository: Repository<FeedPostEntity>
  ) {}

  createPost(feedPost: FeedPost): Observable<FeedPost> {                 // POST 방식으로 데이터 전달
    return from(this.feedPostRepository.save(feedPost));
  }

  findAllPosts(): Observable<FeedPost[]> {
    return from(this.feedPostRepository.find());
  }

  updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, feedPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }
}
