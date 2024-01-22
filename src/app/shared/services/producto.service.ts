import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';
import { Categoria } from '../interfaces/categoria.interface';
import { Busqueda } from '../interfaces/busqueda.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Producto[]> {
    return this.http.get<Categoria[]>('assets/data/database.json')
    .pipe(map(
      (data: any) => {
        return data.map((element: 
          any) => {
          return [...element.productos]
        });
      })
    )
  }

  

  // buscar(parametros: Busqueda) {
  //   const productosFiltrados = this.productos.filter(producto => {
  //     if (parametros.aptoCeliaco && !producto.esCeliaco) return false;
  //     if (parametros.aptoVegano && !producto.esVegano) return false;
      
  //     const busquedaTitulo = producto.nombre.toLowerCase().includes(parametros.texto.toLowerCase())

  //     if (busquedaTitulo) return true;

  //     for (let i = 0; i < producto.ingredientes.length; i++) {
  //       const ingrediente = producto.ingredientes[i];

  //       if (ingrediente.toLowerCase().includes(parametros.texto.toLowerCase())) {
  //         return true
  //       }
        
  //     }
  //     return false;
  //   });
  // }
  
}
