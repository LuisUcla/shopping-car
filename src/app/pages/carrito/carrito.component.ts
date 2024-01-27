import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';
import { CarService } from '../../shared/services/car.service';
import { Cart } from '../../shared/interfaces/carrito.interface';
import { Producto } from '../../shared/interfaces/producto.interface';
import { ProductoService } from '../../shared/services/producto.service';
import { PerfilService } from '../../shared/services/perfil-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {

  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>; // elemento para usar modal
  
  carrito: Cart[] = [];

  productos: any[] = []
  productosCarrito: Producto[] = []

  subtotal = 0;
  delivery = 100;
  total = 0;

  constructor(
    private headerService: HeaderService,
    private cartService: CarService,
    private productoService: ProductoService,
    public perfilService: PerfilService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.getData(); // cargo todos los productos
    this.headerService.titulo.set('Carrito');
  }

  eliminarProducto(id: number) {
    console.log(id)
    this.cartService.eliminarProducto(id);
    this.carrito = this.cartService.getCarrito();
    this.productosCarrito = this.productosCarrito.filter(producto => +producto.id != id)
    this.calcularInfo();
   

  }

  cambiarCantidad(id: number, cantidad: number) {
    this.cartService.cambiarCantidad(id, cantidad);
    this.calcularInfo()
  }

  // ====================== metodos de ayuda ====================

  getData() {
    this.productoService.getAll().subscribe(data => {
      // esto se debe modificar cuando tenga la db real
      data.forEach((element: any) => {
        for (let el of element) {
          this.productos = [...this.productos, el]
        }
      });

      // esto se debe modificar cuando tenga la db real
      
      this.carrito = this.cartService.getCarrito();
      
      this.carrito.forEach(async prod => {
        const producto = await this.getById(prod.id);
        if (producto) {
          this.productosCarrito.push(producto);
        }
        
        this.calcularInfo();
      });
    });
  }

  async getById(id: number) {
    return await this.productos.find(art => +art.id === id);
  }

  async calcularInfo() {
    // esto se debe modificar cuando tenga la db real
    this.subtotal = 0;
    if (this.carrito.length) {
      for (let i = 0; i < this.productosCarrito.length; i++) {
        this.subtotal += this.productosCarrito[i].precio * this.carrito[i].cantidad;
        this.total = this.subtotal + this.delivery
      }
    }
  }

  async enviarMjs() {
    let pedido = ''
    for (let i = 0; i < this.cartService.carrito.length; i++) {
      const producto = await this.getById(this.cartService.carrito[i].id)
      pedido += `* ${this.cartService.carrito[i].cantidad} X ${producto?.nombre}
`
    }
    const mensaje = `
hola soy ${this.perfilService.perfil()?.nombre} y quiero hacer el siguiente pedido:

${pedido}
si quieres comunicarte conmigo, al numero <b>${this.perfilService.perfil()?.telefono}</b>
la dirección del envío es: ${this.perfilService.perfil()?.direccion}
Muchas gracias...`

    const link = `https://wa.me/+584160255073?text=${encodeURI(mensaje)}`
    //window.open(link,"_blank");
    this.dialog.nativeElement.showModal(); // muestra el modal
  }

  finalizarPedido() {
    this.cartService.vaciar();
    //this.carrito = this.cartService.getCarrito();
    this.dialog.nativeElement.close();

    this.router.navigate(['/'])

  }

  editarPedido() {
    this.dialog.nativeElement.close();
  }
}
