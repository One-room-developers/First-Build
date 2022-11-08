import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from './entities/post.entity';
import { FeedController } from './controllers/feed.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FeedPostEntity])],          // 새로만든 레포지토리(Entity)를 Nest에게 전달
  providers: [FeedService],
  controllers: [FeedController],
})

export class FeedModule {}
