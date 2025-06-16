import mongoose from "mongoose";
import { Core } from "./core"

/**
 * Model de news
 * @type chapeu {String} título menor
 * @type autor {String} quem escreveu a notícia
 */

export class News extends Core{
    chapeu:String
    autor:String
}

export const NewsSchema=new mongoose.Schema({
    titulo:{type:String},
    chapeu:{type:String},
    texto:{type:String},
    autor:{type:String},
    imagem:{type:String},
    dataPublicacao:{type:Date},
    tags:{type:String},
    link:{type:String},
    ativo:{type:Boolean}
})

