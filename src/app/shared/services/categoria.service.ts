import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('assets/data/database.json')
  }

  getByCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>('assets/data/database.json')
      .pipe(map(
        (data: any) => {
          return data.find((data: Categoria) => data.id == id);
        })
      )
  }
}
