/**
 * 데이터베이스 테이블을 정의
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feed_post')            // 테이블 이름
export class FeedPostEntity {
  @PrimaryGeneratedColumn()      // 기본키 컬럼
  id: number;

  @Column({ default: ''} )       // default로 컬럼의 기본값 설정
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;               // 컬럼의 자료형
}