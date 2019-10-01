import { Trip } from '../../index/app.trip';

export interface User {
    id: number,
    name: string,
    trips?: Trip[],
    avatar?: string,
}
