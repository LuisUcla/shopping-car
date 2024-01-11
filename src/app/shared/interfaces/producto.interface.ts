export interface Producto {
    id: number,
    nombre: string,
    precio: number
    fotoUrl: string;
    esVegano: boolean;
    esCeliaco: boolean;
    ingredientes: string[];
}