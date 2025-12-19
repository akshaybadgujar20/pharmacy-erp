import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-inventory',
  imports: [
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    TagModule
],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {

  searchText = ''

  medicines = [
    {
      name: 'Crocin 500',
      company: 'GSK',
      batch: 'CR123',
      expiry: '08/2026',
      stock: 120,
      mrp: 25
    },
    {
      name: 'Azithromycin 500',
      company: 'Cipla',
      batch: 'AZ456',
      expiry: '03/2025',
      stock: 8,
      mrp: 120
    },
    {
      name: 'Pantoprazole',
      company: 'Sun Pharma',
      batch: 'PA789',
      expiry: '01/2025',
      stock: 0,
      mrp: 75
    }
  ]

  isLowStock(stock: number): boolean {
    return stock > 0 && stock < 10
  }

  isOutOfStock(stock: number): boolean {
    return stock === 0
  }
}
