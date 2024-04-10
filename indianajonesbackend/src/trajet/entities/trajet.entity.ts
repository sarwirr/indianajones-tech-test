import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import mongoose ,{ HydratedDocument } from "mongoose";


export type TrajetDocument = HydratedDocument<Trajet>;
@Schema()
export class Trajet {

_id;

@Prop({
    required: true
})
depart: string;

@Prop({
    required: true
})
destination: string;

@Prop({
    required: true
})
heureDepart: string;

@Prop({
    required: true
})
duree: string;

}

export const TrajetSchema = SchemaFactory.createForClass(Trajet);
