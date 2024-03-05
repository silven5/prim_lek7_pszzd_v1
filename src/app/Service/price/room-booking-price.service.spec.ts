import { TestBed } from '@angular/core/testing';

import { RoomBookingPriceService } from './room-booking-price.service';
import { Room } from '../../Class/Room';

describe('RoomBookingPriceService', () => {
  let service: RoomBookingPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomBookingPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  fit('Немає дати бронювання', () => {
    expect(service.StringToDate('')).toEqual(new Date());
  });
  fit('Дата бронювання 25.06.2024', () => {
    expect(service.StringToDate('25.06.2024')).toEqual(new Date('06-25-2024'));
  });
  fit('Дата початку бронювання 25.06.2024 закынчення 25.06.2024 номер стандарт', () => {
    let room = new Room();
    room.bookingPeriodStart = '25.06.2024';
    room.bookingPeriodEnd = '26.06.2024';
    room.type = 'Стандарт';
    expect(service.calculate(room)).toBe(1000);
  });
});
