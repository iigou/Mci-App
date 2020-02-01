import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IGameTitleActions {
  matIcon: string;
  action?: () => void;
}

export interface IGameTitle {
  title: string;
  titleActions: IGameTitleActions[];
}

@Injectable({
  providedIn: 'root'
})
export class GameTitleService {

  private gameTitle: BehaviorSubject<IGameTitle> = new BehaviorSubject(null);

  constructor() { }

  setTitle(newTitle: IGameTitle) {
    this.gameTitle.next({...newTitle});
  }

  getTitle() {
    return this.gameTitle.asObservable();
  }
}
