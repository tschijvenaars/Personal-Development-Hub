import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  private _titleSource = new BehaviorSubject('Home');
  title: Observable<string> = this._titleSource.asObservable();

  setTitle(data: string) {
    this._titleSource.next(data);
  }
}
