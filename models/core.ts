import { Document } from "mongoose"

/**
 * @summary Classe abstrata para criação das models
 * @type titulo {String} título
 * @type texto {String} texto ou descrição
 * @type imagem {String} image default ou avatar
 * @type dataPublicacao {String} data de publicação
 * @type tags {String} tags relacionada a model
 * @type link {String} link do conteúdo
 */

export abstract class Core extends Document{
    titulo:String
    texto:String
    imagem:String
    dataPublicacao:Date
    tags:String
    link:String
    ativo:Boolean
}