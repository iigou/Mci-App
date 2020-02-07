import { Injectable } from '@angular/core';
import { GamesService } from '../games.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { IState, IFindTheSoundGame, IFindTheSoundSolution } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FindTheSoundsService {

  private sub: Subscription;
  private gamesState: BehaviorSubject<IState<IFindTheSoundGame[]>> = new BehaviorSubject({ data: [], state: true });
  private selectedGame: BehaviorSubject<IState<IFindTheSoundGame>> = new BehaviorSubject({ data: {}, state: true });

  private changeState = (x: BehaviorSubject<IState<any>>) => x.next({ ...x.value, state: !x.value });

  private upsertGame = (game: IFindTheSoundGame) =>
    this.gamesState.next({ ...this.gamesState, ...{ data: this.updateInstances([game]), state: true } })
  private upsertGames = (games: IFindTheSoundGame[]) => this.gamesState.next({ ...this.gamesState, ...{ data: games, state: true } });
  private selectGame = (game: IFindTheSoundGame) =>
    this.selectedGame.next({ ...this.selectedGame, ...{ data: { ...this.selectGameValue(game), ...game }, state: true } })

  private selectGameValue = (game: IFindTheSoundGame) => this.gamesState.value.data.filter(x => x.game.id === game.game.id)[0] || {};
  private updateInstances = (instances: IFindTheSoundGame[]) => {
    const updates: IFindTheSoundGame[] = [];
    instances.forEach(x => {
      const updated = { ...this.selectGameValue(x), ...x };
      updates.push(updated);
    });
    return updates;
  }

  constructor(private gamesSvc: GamesService) { }

  getGames() {
    this.changeState(this.gamesState);
    this.sub = this.gamesSvc.getGames<IFindTheSoundGame[]>('findTheSounds').subscribe(values => this.upsertGames(values));
    return this.gamesState.asObservable();
  }

  getGame(id: string) {
    this.changeState(this.selectedGame);
    this.sub = this.gamesSvc.getGame<IFindTheSoundGame>(id, 'findTheSounds')
      .subscribe(value => { this.upsertGame(value); this.selectGame(value); });
    return this.selectedGame.asObservable();
  }

  createGame(chosenDifficulty: string) {
    this.changeState(this.gamesState);
    this.changeState(this.selectedGame);
    this.sub = this.gamesSvc.createGame<IFindTheSoundGame>(chosenDifficulty, 'findTheSounds').subscribe(value => {
      this.upsertGame(value);
      this.selectGame(value);
    });
  }

  solveGame(id: string, time: number, solution: IFindTheSoundSolution) {
    this.changeState(this.selectedGame);
    this.sub = this.gamesSvc.solveGame<IFindTheSoundGame, IFindTheSoundSolution>(id, time, solution, 'findTheSounds')
      .subscribe(value => this.selectGame(value));
  }
}
