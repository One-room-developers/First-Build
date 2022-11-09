import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class Episode {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 20 })
  title: string

  @Column({ type: 'text', default: ''})
  mainText: string;
}