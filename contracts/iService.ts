import { Result } from "../infra/result";

/**
 * Interface genéria para retorno de pesquisas
 */

export interface IService<T>{
    /**
     * @summary busca por ir
     * @param id {String}
     * @returns retorna o resultado de uma busca pelo seu id
     */
    get(id:string):Promise<T>

    /**
     * @summary realiza uma busca paginada de uma model
     * @param page {Number} página
     * @param qtd {Number} quantidade de itens
     * @returns retorna uma lista de T onde T é uma model
     */
    getAll(page:number,qtd:number):Promise<Result<T>>
}