import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/carrito.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carrito: Cart[] = [ ]

  constructor() {
   const cart = localStorage.getItem('cart');

   if (cart) {
    this.carrito = JSON.parse(cart) 
   }
  }

  getCarrito(): Cart[] {
    return this.carrito
  }

  agregarProducto(id: number, cantidad: number, notas: string | undefined = undefined) {
   const i = this.carrito.findIndex(producto => producto.id === id);

    if (i === -1) {
      const nuevoProducto: Cart = { id, cantidad }
      if (notas) {
        nuevoProducto.notas = notas;
      }
      this.carrito.push(nuevoProducto);
    } else {
      this.carrito[i].cantidad += cantidad;
      if (notas) {
        this.carrito[i].notas = notas;
      }
    }

    this.actualizarAlmacenamiento();
  }

  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter(producto => producto.id !== id);

    if (this.carrito.length === 0) {
      return localStorage.clear()
    }

    this.actualizarAlmacenamiento();
  }

  cambiarCantidad(id: number, cantidad: number) {
    this.carrito = this.carrito.map(producto => {
      const productoActual = producto;

      if (productoActual.id == id) {
        productoActual.cantidad = cantidad;
      }
      
      return productoActual;
    })
    this.actualizarAlmacenamiento();
  }

  actualizarAlmacenamiento() {
    localStorage.setItem('cart',JSON.stringify(this.carrito) )
  }
}
