export interface Producto {
    id: number,
    nombre: string,
    precio: string
    fotoUrl: string;
    esVegano: boolean;
    esCeliaco: boolean;
    ingredientes: string[];
}