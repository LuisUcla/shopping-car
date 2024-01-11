import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';
import { Categoria } from '../interfaces/categoria.interface';

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
  
}
