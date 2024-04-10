import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrajetService } from './trajet.service';
import { CreateTrajetDto } from './dto/create-trajet.dto';
import { UpdateTrajetDto } from './dto/update-trajet.dto';

@Controller('trajet')
export class TrajetController {
  constructor(private readonly trajetService: TrajetService) {}

  @Post()
  create(@Body() createTrajetDto: CreateTrajetDto) {
    return this.trajetService.create(createTrajetDto);
  }
  
  @Get()
  findAll() {
    return this.trajetService.findAll();
  }

  @Get('gettrajet/:depart/:destination/:heureDepart')
  findTrajet(
    @Param('depart') depart: string,
    @Param('destination') destination: string,
    @Param('heureDepart') heureDepart: string
    ) {
      return this.trajetService.findtrajet(depart, destination, heureDepart);
    }  


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trajetService.remove(id);
  }
}
