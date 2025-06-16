import express, { Application, Request, Response } from "express"
import database from "./infra/db"
import NewsController from "./controller/newsController"
import VideosController from "./controller/videosController"
import GaleriaController from "./controller/galeriaController"
import "reflect-metadata"
import { container } from "tsyringe"
import "./shared/container"

class StartUp{
    public app:Application
    private _db:database=new database()
    private news=container.resolve(NewsController)
    private videos=container.resolve(VideosController)
    private galeria=container.resolve(GaleriaController)

    constructor(){
        this.app=express()
        this._db.createConnection()
        this.routes()
    }

    routes(){
        // health check route
        this.app.route("/").get((req,res)=>{
            res.send({version:"0.0.2"})
        })

        // news
        this.app.route("/api/v1/news/:page/:qtd").get((req:Request,res:Response)=>{
            // return NewsController.get(req,res)
            return this.news.get(req,res)
        })

        // news
        this.app.route("/api/v1/news/:id").get((req:Request,res:Response)=>{
            // return NewsController.getById(req,res)
            return this.news.getById(req,res)
        })

        // videos
        this.app.route("/api/v1/videos/:page/:qtd").get((req:Request,res:Response)=>{
            return this.videos.get(req,res)
        })

        // videos
        this.app.route("/api/v1/videos/:id").get((req:Request,res:Response)=>{
            // return VideosController.getById(req,res)
            return this.videos.getById(req,res)
        })

        // galeria
        this.app.route("/api/v1/galeria/:page/:qtd").get((req:Request,res:Response)=>{
            // return GaleriaController.get(req,res)
            return this.galeria.get(req,res)
        })

        // galeria
        this.app.route("/api/v1/galeria/:id").get((req:Request,res:Response)=>{
            // return GaleriaController.getById(req,res)
            return this.galeria.getById(req,res)
        })
    }
}

export default new StartUp()