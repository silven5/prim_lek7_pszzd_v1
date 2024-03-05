import { Room } from './Room';

export class Rooms<T extends Room> {
  private itemAll: T[] = [];
  public add(item: T, p: number): void {
    item.priceRoom = p;
    this.itemAll.push(item);
  }

  public clear() {
    this.itemAll = [];
  }
  public toArray(): T[] {
    return this.itemAll;
  }
}
