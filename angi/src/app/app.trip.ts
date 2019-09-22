import { Place } from './index/details/app.place';

export interface Trip {
    id: number;
    title: string;
    date: number[];
    mainImg: string,
    description?: string;
    type: string;
    rating?: number;
    places?: Place[];
}
