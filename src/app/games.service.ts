import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from './interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private apiUrl = '/mci/api';

  constructor(private httpClient: HttpClient) { }

  getGames<T>(gameType: string) {
    return this.httpClient
      .get<IResponse<T>>(`${this.apiUrl}/${gameType}`)
      .pipe(map(x => x.payload));
  }

  getGame<T>(id: string, gameType: string) {
    return this.httpClient
      .get<IResponse<T>>(`${this.apiUrl}/${gameType}/${id}`)
      .pipe(map(x => x.payload));
  }

  createGame<T>(difficulty: string, gameType: string) {
    return this.httpClient
      .post<IResponse<T>>(`${this.apiUrl}/${gameType}`, { difficulty })
      .pipe(map(x => x.payload));
  }

  solveGame<T, R>(id: string, time: number, solution: R, gameType: string) {
    return this.httpClient
      .put<IResponse<T>>(`${this.apiUrl}/${gameType}/${id}`, { completionTime: time, solution })
      .pipe(map(x => x.payload));
  }
}
