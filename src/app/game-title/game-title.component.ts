import { Component, OnInit } from '@angular/core';
import { GameTitleService, IGameTitle } from './game-title.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-title',
  templateUrl: './game-title.component.html',
  styleUrls: ['./game-title.component.css']
})
export class GameTitleComponent implements OnInit {

  gameTitle$: Observable<IGameTitle>;

  constructor(private gameTitleSvc: GameTitleService, private router: Router) { }

  ngOnInit() {
    this.gameTitle$ = this.gameTitleSvc.getTitle();
  }

  goToHome() {
    this.gameTitleSvc.setTitle(null);
    this.router.navigateByUrl('/home');
  }

}
