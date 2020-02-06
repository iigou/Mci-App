import { Component, OnInit } from '@angular/core';
import { IFindTheSoundGame, IState, IFindTheSoundSolution } from '../interfaces';
import { FindTheSoundsService } from '../find-the-sounds/find-the-sounds.service';
import { Observable } from 'rxjs';
import { GameTitleService } from '../game-title/game-title.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-the-sound',
  templateUrl: './find-the-sound.component.html',
  styleUrls: ['./find-the-sound.component.css']
})
export class FindTheSoundComponent implements OnInit {

  game$: Observable<IState<IFindTheSoundGame>>;
  constructor(private svc: FindTheSoundsService,
    private gameTitleSvc: GameTitleService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const title = {
      title: 'Find The Sounds',
      titleActions: [
        {
          action: this.goBack.bind(this),
          matIcon: 'arrow_back'
        }
      ]
    };
    this.gameTitleSvc.setTitle(title);
    this.route.params.subscribe(params => this.game$ = this.svc.getGame(params.id));
  }

  answer(gameId: string, soundId: string, imageId: string) {
    this.svc.solveGame(gameId, 18000, { imageId, soundId });
  }

  goBack() {
    this.router.navigateByUrl('/findthesound');
  }

  goToNext(difficulty: string) {
    this.svc.createGame(difficulty);
  }

}
