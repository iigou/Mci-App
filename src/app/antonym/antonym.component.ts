import { Component, OnInit } from '@angular/core';
import { AntonymsService } from '../antonyms/antonyms.service';
import { Observable } from 'rxjs';
import { IAntonymGame, IState } from '../interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { GameTitleService } from '../game-title/game-title.service';


@Component({
  selector: 'app-antonym',
  templateUrl: './antonym.component.html',
  styleUrls: ['./antonym.component.css']
})
export class AntonymComponent implements OnInit {

  game$: Observable<IState<IAntonymGame>>
  constructor(private svc: AntonymsService, private gameTitleSvc: GameTitleService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const title = {
      title: "Antonyms",
      titleActions: [
        {
          action: this.goBack.bind(this),
          matIcon: 'arrow_back'
        }
      ]
    };
    this.gameTitleSvc.setTitle(title);
    this.route.params.subscribe( params => this.game$ = this.svc.getGame(params["id"]));
  }

  answer(id:string, choice: string) {
    this.svc.solveGame(id, 18000, choice);
  }

  goBack() {
    this.router.navigateByUrl("/antonyms")
  }

  goToNext(difficulty: string) {
    this.svc.createGame(difficulty);
  }
}
