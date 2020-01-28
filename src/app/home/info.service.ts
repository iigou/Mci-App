import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IResponse, IInfoGames } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: HttpClient) { }

  getGames() {
    return this.httpClient.get<IResponse<IInfoGames>>('/mci/api/info/games').pipe(
      map(x => x.payload.games)
    );
  }

}
