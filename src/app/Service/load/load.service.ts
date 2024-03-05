import { Injectable } from '@angular/core';
import { Rooms } from '../../Class/Rooms';
import { Room } from '../../Class/Room';
import { RoomBookingPriceService } from '../price/room-booking-price.service';

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  //масив з даними
  data: any = [];
  rooms: Rooms<Room> = new Rooms();
  //адреса файлу
  dataUrl = 'https://api.jsonbin.io/v3/b/65df0036dc74654018aafdc8';
  //функція зчитування
  async load() {
    this.data = [];
    this.rooms.clear();
    //Отримання запиту асинхроно
    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        while (this.data[i] != undefined) {
          this.rooms.add(
            this.data[i],
            this.priceService.calculate(this.data[i])
          );
          i++;
        }
      });
  }
  constructor(private priceService: RoomBookingPriceService) {}
}
