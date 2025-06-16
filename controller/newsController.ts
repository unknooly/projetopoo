import { NewsService } from "../services/newsService";
import { Request,Response } from "express";
import { injectable, inject } from "tsyringe"
import { INewsService } from "../contracts/iNewsServices";

@injectable()
export class VideosController{
    constructor(@inject("INewsService") private _service:INewsService){}
}

class NewsController{
    private _service:NewsService

    constructor(){
        this._service=new NewsService()
    }

    async get(request:Request,response:Response){
        try{
            const page=request.params.page ? parseInt(request.params.page) : 1
            const qtd=request.params.qtd ? parseInt(request.params.qtd) : 10
            let result=await this._service.getAll(page,qtd)
            response.status(200).json({result})
        } catch(error){
            response.status(500).json({error:error.message||error.toString()})
        }
    }

    async getById(request:Request,response:Response){
        try{
            const _id=request.params.id
            let result=await this._service.get(_id)
            response.status(200).json({result})
        } catch(error){
            response.status(500).json({error:error.message||error.toString()})
        }
    }
}

// export default new NewsController()

