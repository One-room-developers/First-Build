import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Character')
export class CharacterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  userId: string;

  @Column({ default: 3 })
  health: number;
  
  @Column({ default: 3 })
  hungry: number;

  @Column({ default: 3 })
  money: number;

  @Column({ default: 10 })
  strength: number;

  @Column({ default: 10 })
  agility: number;

  @Column({ default: 10 })
  armor: number;

  @Column({ default: 10 })
  mental: number;
}