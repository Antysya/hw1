import { Component } from '@angular/core';

class Item {
  name: string;
  price: number;
  quantity: number;

  constructor(name: string, price: number, quantity: number){
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hw1';
  name: string ='';
  price: number = 0;
  quantity: number = 0;
  itemList: Item[] = [];

  addItem(): void {
    const newItem: Item = {
      name: this.name,
      price: this.price,
      quantity: this.quantity
    };
    this.itemList.push(newItem);
    this.resetForm();
  }

  resetForm(): void {
    this.name = '';
    this.price = 0;
    this.quantity = 0;
  }

  totalCost(): number {
    let total = 0;
    for (const item of this.itemList) {
      total += item.price * item.quantity;
    }
    return total;
  }
}