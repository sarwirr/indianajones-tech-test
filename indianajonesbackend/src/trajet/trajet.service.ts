import { Injectable } from '@nestjs/common';
import { CreateTrajetDto } from './dto/create-trajet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Trajet, TrajetDocument } from './entities/trajet.entity';
import { Model } from 'mongoose';
import { BellmanFordService } from 'src/bellman/bellman.service';

@Injectable()
export class TrajetService {
  constructor(@InjectModel(Trajet.name) private trajetModel: Model<TrajetDocument>,
                private bellmanFordService : BellmanFordService) {}

  async create(createTrajetDto: CreateTrajetDto) {
    try{
      const trajet = new this.trajetModel(createTrajetDto);
    return await trajet.save();
    }
    catch(error){
      return error.message;
    }
    }

  async findAll(): Promise<Trajet[]> {
    try{
      return await this.trajetModel.find().exec();
    }
    catch(error){
      return error.message;
    }
  }

  async findTrainsAfterOnTime(startTime: string): Promise<Trajet[]> {
    try {
      const [startHour, startMinute] = startTime.split(':').map(Number);
      const startTimeInMinutes = startHour * 60 + startMinute;

      return await this.trajetModel.aggregate([
        {
          $addFields: {
            departureHour: { $toInt: { $arrayElemAt: [{ $split: ["$heureDepart", ":"] }, 0] } },
            departureMinute: { $toInt: { $arrayElemAt: [{ $split: ["$heureDepart", ":"] }, 1] } }
          }
        },
        {
          $addFields: {
            heureDepartInMinutes: { $add: [{ $multiply: ["$departureHour", 60] }, "$departureMinute"] }
          }
        },
        {
          $match: {
            heureDepartInMinutes: { $gt: startTimeInMinutes }
          }
        }
      ]).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }

   async findtrajet(depart: string,destination: string,departTime: string
  ) {
    try {
      const trajets = await this.findTrainsAfterOnTime(departTime); 
      
      const result = this.bellmanFordService.findShortestPath(trajets,depart,destination,departTime);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async findAllByDepart(depart: string) {
    return await this.trajetModel.find({ depart }).exec();
  }

  remove(id : string) {
    return this.trajetModel.deleteOne({_id: id}).exec();
  }

   
}