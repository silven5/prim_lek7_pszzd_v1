import { Injectable } from '@angular/core';
import { Room } from '../../Class/Room';
const Cost = {
  Стандарт: 1000,
  Люкс: 1500,
  Полулюкс: 1300,
  '': 0,
};
@Injectable({
  providedIn: 'root',
})
export class RoomBookingPriceService {
  StringToDate(d: string): Date {
    if (d == '') return new Date();
    else {
      let date = new Date();
      const [day, month, year] = d.split('.');
      date = new Date(+year, +month - 1, +day);
      return date;
    }
  }
  calculate(room: Room): number {
    let price = 0;
    let d1 = this.StringToDate(room.bookingPeriodStart);
    let d2 = this.StringToDate(room.bookingPeriodEnd);
    let c = Cost[room.type];
    price = Math.floor(Math.abs(d2.getTime() - d1.getTime()) / 86400000) * c;
    return price;
  }
  constructor() {}
}
