import { IAnimal } from "./IAnimal";

export interface IAnimalExt extends IAnimal {
  latinName: string;
  yearOfBirth: number;
  medicine: string;
  longDescription: string;
  isFed: boolean;
  lastFed: string;
}
