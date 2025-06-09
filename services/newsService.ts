import { INewsService } from "../contracts/iNewsServices";
import { Result } from "../infra/result";
import { NewsRepository } from "../repository/newsRepository";

export class NewsService implements INewsService{
    async get(_id:string){
        let result=await NewsRepository.findById(_id)
        return result
    }

    async getAll(page:number,qtd:number):Promise<Result>{
        let result=new Result()
        result.Page=page
        result.Qtd=qtd
        // linha abaixo original: await NewsRepository.count({})
        result.Total=await NewsRepository.length
        result.Data=await NewsRepository.find({}).skip((page*qtd)-qtd).limit(qtd)
        return result
    }
}

