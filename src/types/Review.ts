import {Person} from './Person.ts';

export type Review = {
  ratingScore: number;
  author: Person;
  publicisedDate: string;
  text: string;
}
