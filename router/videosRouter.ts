import "reflect-metadata"
import express, { Request, Response } from "express"
import { container } from "tsyringe"
import { VideosController } from "../controller/newsController"

const videosRouter=express()
const videos=container.resolve(VideosController)

videos.route("/api/v1/videos/:page/:qtd").get((req:Request,res:Response)=>{
    return videos.get(req,res)
})

videos.route("/api/v1/videos/:id").get((req:Request,res:Response)=>{
    return videos.getById(req,res)
})

export default videosRouter