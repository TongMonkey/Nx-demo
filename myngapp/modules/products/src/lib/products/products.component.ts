import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { OrdersComponent } from './../../../../orders/src/lib/orders/orders.component';
import { OrdersComponent } from '@myngapp/orders';

@Component({
  selector: 'myngapp-products',
  standalone: true,
  imports: [CommonModule, OrdersComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
