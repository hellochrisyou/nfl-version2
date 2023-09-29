import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  week1 = new Date('2023-09-7');
  week2 = new Date('2023-09-13');
  week3 = new Date('2023-09-20');
  week4 = new Date('2023-09-27');
  week5 = new Date('2023-10-04');
  week6 = new Date('2023-10-11');
  week7 = new Date('2023-10-18');
  week8 = new Date('2023-10-25');
  week9 = new Date('2023-11-01');
  week10 = new Date('2023-11-08');
  week11 = new Date('2023-11-15');
  week12 = new Date('2023-11-22');
  week13 = new Date('2023-11-29');
  week14 = new Date('2023-12-06');
  week15 = new Date('2023-12-13');
  week16 = new Date('2023-12-20');
  week17 = new Date('2023-12-27');
  week18 = new Date('2024-01-03');
  endOfSeason = new Date('2023-01-13');

  private _currentWeek = 1;

  public get currentWeek() {

    return this._currentWeek;
  }
  public set currentWeek(value) {
    this._currentWeek = value;
  }
  constructor(
  ) {
  }

}
