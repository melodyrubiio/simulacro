import { ICity } from "../models/ICity.ts";

export class CitiesController {
    url : string;

    constructor (url : string) {
        this.url = url;
    }

    async getCities(endPoint : string) : Promise<ICity> {
        const response = await fetch(`${this.url}${endPoint}`);
        const data = await response.json();

        return data;
    }
}