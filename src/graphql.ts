
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface SaveProdutoInput {
    id?: Nullable<number>;
    descricao?: Nullable<string>;
}

export interface IQuery {
    produtoFindAll(): Nullable<Nullable<Produto>[]> | Promise<Nullable<Nullable<Produto>[]>>;
    produtoFindById(id: string): Nullable<Produto> | Promise<Nullable<Produto>>;
}

export interface IMutation {
    saveProduto(saveProdutoInput: SaveProdutoInput): Nullable<Produto> | Promise<Nullable<Produto>>;
}

export interface Produto {
    id?: Nullable<number>;
    descricao?: Nullable<string>;
}

type Nullable<T> = T | null;
