
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

export interface UsuarioSaveInput {
    id: number;
    email: string;
    senha: string;
}

export interface IQuery {
    produtoFindAll(): Nullable<Nullable<Produto>[]> | Promise<Nullable<Nullable<Produto>[]>>;
    produtoFindById(id: string): Nullable<Produto> | Promise<Nullable<Produto>>;
    usuarioFindAll(): Nullable<Nullable<UsuarioOutput>[]> | Promise<Nullable<Nullable<UsuarioOutput>[]>>;
    usuarioFindById(id: string): Nullable<UsuarioOutput> | Promise<Nullable<UsuarioOutput>>;
}

export interface IMutation {
    produtoSave(produtoSaveInput: ProdutoSaveInput): Nullable<Produto> | Promise<Nullable<Produto>>;
    usuarioSave(usuarioSaveInput: UsuarioSaveInput): Nullable<UsuarioOutput> | Promise<Nullable<UsuarioOutput>>;
}

export interface Produto {
    id?: Nullable<number>;
    descricao?: Nullable<string>;
}

export interface UsuarioOutput {
    email: string;
}

type Nullable<T> = T | null;
