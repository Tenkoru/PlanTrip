import { Trip } from './app.trip';

export interface User {
    id: number,
    name: string,
    trips?: Trip[],
    avatar?: string,
}
