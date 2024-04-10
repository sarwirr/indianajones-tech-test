import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrajetModule } from './trajet/trajet.module';
import { BellmanFordService } from './bellman/bellman.service';
import * as dotenv from 'dotenv';

dotenv.config()
@Module({
  imports: [
  MongooseModule.forRoot(
      `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URI}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin` 
      ),
  TrajetModule,
  ],
  controllers: [AppController],
  providers: [AppService, BellmanFordService],
})
export class AppModule {}
