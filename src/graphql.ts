
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface ProdutoSaveInput {
    id?: Nullable<number>;
    descricao?: Nullable<string>;
}

export interface IQuery {
    produtoFindAll(): Nullable<Nullable<Produto>[]> | Promise<Nullable<Nullable<Produto>[]>>;
    produtoFindById(id: string): Nullable<Produto> | Promise<Nullable<Produto>>;
}

export interface IMutation {
    produtoSave(produtoSaveInput: ProdutoSaveInput): Nullable<Produto> | Promise<Nullable<Produto>>;
}

export interface Produto {
    id?: Nullable<number>;
    descricao?: Nullable<string>;
}

type Nullable<T> = T | null;
