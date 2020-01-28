import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse, IAntonymGame, IState } from '../interfaces';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AntonymsService {

  private sub: Subscription;
  private gamesState: BehaviorSubject<IState<IAntonymGame[]>> = new BehaviorSubject({data: [], state: true});
  private selectedGame: BehaviorSubject<IState<IAntonymGame>> = new BehaviorSubject({data: {}, state: true});
  
  private changeState = (x: BehaviorSubject<IState<any>>) => x.next({...x.value, state: !x.value})

  private upsertGame = (game: IAntonymGame) => this.gamesState.next({...this.gamesState, ...{data: this.updateInstances([game]), state: true}});
  private upsertGames = (games: IAntonymGame[]) => this.gamesState.next({...this.gamesState, ...{data: games, state: true}});
  private selectGame = (game:IAntonymGame) => this.selectedGame.next({...this.selectedGame, ...{data: {...this.selectGameValue(game), ...game}, state: true}});
  
  private selectGameValue = (game: IAntonymGame) => this.gamesState.value.data.filter( x => x.game.id === game.game.id)[0] || {};
  private updateInstances = (instances: IAntonymGame[]) => { 
    let updates = []
    instances.forEach( x => {
      const updated = {...this.selectGameValue(x), ...x}
      updates.push(updated);
    })
    return updates;
  }

  constructor(private httpClient: HttpClient) { }

  getGames() {
    this.changeState(this.gamesState)
    this.sub = this.httpClient
      .get<IResponse<IAntonymGame[]>>('/mci/api/antonyms')
      .pipe(map(x => x.payload))
      .subscribe(values => this.upsertGames(values));
    return this.gamesState.asObservable();
  }

  getGame(id: string) {
    this.changeState(this.selectedGame)
    this.sub = this.httpClient
      .get<IResponse<IAntonymGame>>(`/mci/api/antonyms/${id}`)
      .pipe(map(x => x.payload))
      .subscribe(value => {
        this.upsertGame(value);
        this.selectGame(value);
      });
    return this.selectedGame.asObservable()
  }

  createGame(chosenDifficulty: string) {
    this.changeState(this.gamesState)
    this.changeState(this.selectedGame)
    this.sub = this.httpClient
      .post<IResponse<IAntonymGame>>('/mci/api/antonyms', {difficulty: chosenDifficulty})
      .pipe(map(x => x.payload))
      .subscribe(value => {
        this.upsertGame(value);
        this.selectGame(value);
      });
  }

  solveGame(id: string, time: number, choice: string) {
    this.changeState(this.selectedGame)
    this.sub = this.httpClient
      .put<IResponse<IAntonymGame>>(`/mci/api/antonyms/${id}`, {completionTime: time, solution: choice})
      .pipe(map(x => x.payload))
      .subscribe(value => this.selectGame(value))
  }
}
