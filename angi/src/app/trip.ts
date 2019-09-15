import { Place } from './place';

export interface Trip {
    id: string;
    title: string;
    date: number[];
    description: string;
    type: string;
    rating: number;
    places: Place[];
}
