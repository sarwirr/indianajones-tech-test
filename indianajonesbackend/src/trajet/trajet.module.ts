import { Module } from '@nestjs/common';
import { TrajetService } from './trajet.service';
import { TrajetController } from './trajet.controller';
import { MongooseError } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Trajet, TrajetSchema } from './entities/trajet.entity';
import { DijikstraService } from 'src/dijikstra/dijikstra.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trajet.name, schema: TrajetSchema }])
],
  controllers: [TrajetController],
  providers: [TrajetService, DijikstraService],
})
export class TrajetModule {}
