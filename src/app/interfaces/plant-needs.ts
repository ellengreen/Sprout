import { LightConditions } from "../enums/light-conditions";

export interface PlantNeeds {
    wateringSchedule: string;
    light: LightConditions;
}
