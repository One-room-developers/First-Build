import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterController } from './controllers/character.controller';
import { CharacterEntity } from './models/character.entity';
import { CharacterService } from './services/character.service';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterEntity])],
  providers: [CharacterService],
  controllers: [CharacterController],
})
export class CharacterModule {}
