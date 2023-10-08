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
  isCurrentWeek(weekInput: Date): boolean {
    if (this.currentWeek === 5) {
      if (weekInput > this.week5 && weekInput < this.week6) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 6) {
      if (weekInput > this.week6 && weekInput < this.week7) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 7) {
      if (weekInput > this.week7 && weekInput < this.week8) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 8) {
      if (weekInput > this.week8 && weekInput < this.week9) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 9) {
      if (weekInput > this.week9 && weekInput < this.week10) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 10) {
      if (weekInput > this.week10 && weekInput < this.week11) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 11) {
      if (weekInput > this.week11 && weekInput < this.week12) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 12) {
      if (weekInput > this.week12 && weekInput < this.week13) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 13) {
      if (weekInput > this.week13 && weekInput < this.week14) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 14) {
      if (weekInput > this.week14 && weekInput < this.week15) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 15) {
      if (weekInput > this.week15 && weekInput < this.week16) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 16) {
      if (weekInput > this.week16 && weekInput < this.week17) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 17) {
      if (weekInput > this.week17 && weekInput < this.week18) {
        return true;
      } else {
        return false;
      }
    }else if (this.currentWeek === 18) {
      if (weekInput > this.week18) {
        return true;
      } else {
        return false;
      }
    }
    return false;;
  }
}
