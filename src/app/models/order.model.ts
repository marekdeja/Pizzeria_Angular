export interface Order{
    "id"?: number,
    "dishIds": Array<number>,
    "name": string,
    "phone": number,
    "address": string,
    "status": string
}