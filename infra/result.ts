/**
 * @template Total
 * @param {T} parâmetro genérico para receber uma model
 * @returns {T} retorna uma model
 */

export class Result<T>{
    /**Quantidade de registros por página */
    Qtd:number

    /**Página da pesquisa */
    Page:number

    /**Total de registros encontrados no banco de dadoso */
    Total:number

    /**Array de uma entidade */
    Data:Array<T>
}