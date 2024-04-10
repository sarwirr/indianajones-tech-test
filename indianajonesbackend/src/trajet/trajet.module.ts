import { Module } from '@nestjs/common';
import { TrajetService } from './trajet.service';
import { TrajetController } from './trajet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Trajet, TrajetSchema } from './entities/trajet.entity';
import { BellmanFordService } from 'src/bellman/bellman.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trajet.name, schema: TrajetSchema }])
],
  controllers: [TrajetController],
  providers: [TrajetService, BellmanFordService],
})
export class TrajetModule {}
