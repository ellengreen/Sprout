import { PlantNeeds } from "./plant-needs";

export interface Plant {
    name: string;
    needs?: PlantNeeds;
    acquiredDate?: Date
}
