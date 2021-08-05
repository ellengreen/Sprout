import { Plant } from "./plant";

export interface Room {
    name: string;
    plants?: Plant[];
    lighting: string;
}
