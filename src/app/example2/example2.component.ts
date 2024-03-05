import { LoadService } from './../Service/load/load.service';
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Rooms } from '../Class/Rooms';
import { Room } from '../Class/Room';
@Component({
  selector: 'app-example2',
  standalone: true,
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss',
  imports: [CommonModule],
})
export class Example2Component {
  rooms: Rooms<Room> = new Rooms();
  constructor(private loadService: LoadService) {}
  ngOnInit() {
    this.loadService.load();
    this.rooms = this.loadService.rooms;
  }
}
