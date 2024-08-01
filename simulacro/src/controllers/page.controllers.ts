import { Ilogin, IresponseLogin } from "../model/ilogin";

export class PageController{
    url: string;

    constructor(url: string){
        this.url = url;
    }

    async login(data: Ilogin, endPoint: string):Promise<IresponseLogin>{
        const Response = await fetch(` ${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'Application/json'
            },
            body: JSON.stringify(data)
        })
        if(Response.status !== 200){
            throw new Error('login fail');
        }
        console.log(`res.status: ${Response.status}`);

        const token: IresponseLogin = await Response.json();
        return token;
    }
}