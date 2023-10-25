import {Person} from './person.ts';

export type Review = {
  ratingScore: number;
  author: Person;
  publicisedDate: string;
  text: string;
}
