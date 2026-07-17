export interface Microbus{
    id:number;
    driverName:string;
    route:string;
    farePerSeat:number;
    seatsAvailable:number;
    ratings: { [key: string]: number }[];
}