import { Component } from '@angular/core';
import { DishService } from '../Service/dish/dish.service.ts.service';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss',
})
export class Example1Component {
  items: string[] = [];
  name: string = '';
  constructor(private dishService: DishService) {}
  addItem(name: any) {
    if (typeof name === 'string') this.dishService.addData(name.toString());
  }
  ngOnInit() {
    this.items = this.dishService.getData();
  }
}
