import { LightConditions } from "../enums/light-conditions";
import { Plant } from "./plant";

export interface Room {
    id: string;
    name: string;
    plants?: Plant[];
    lighting: LightConditions;
}
