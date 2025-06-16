import { News } from "../models/news"
import { Result } from "../infra/result"
import { IService } from "./iService"

/**
 * Contrato INewsService
 * @summary esse contrato implementa a interface IService passando a model de News
 */

export interface INewsService extends IService<News>{
    // get(id:string)

    // getAll(page:number,qtd:number):Promise<Result>
}

