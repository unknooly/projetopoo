import { News } from "../models/news"
import { Result } from "../infra/result"
import { IService } from "./iService"

export interface INewsService extends IService<News>{
    // get(id:string)

    // getAll(page:number,qtd:number):Promise<Result>
}

