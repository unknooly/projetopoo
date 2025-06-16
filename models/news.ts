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