import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IState, IFindTheSoundGame, IAntonymGame } from '../interfaces';
import { FindTheSoundsService } from './find-the-sounds.service';
import { GameTitleService } from '../game-title/game-title.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GameCreationDialogComponent } from '../game-creation-dialog/game-creation-dialog.component';

@Component({
  selector: 'app-find-the-sounds',
  templateUrl: './find-the-sounds.component.html',
  styleUrls: ['./find-the-sounds.component.css']
})
export class FindTheSoundsComponent implements OnInit {

  title = 'Find The Sounds';
  games$: Observable<IState<IFindTheSoundGame[]>>;

  constructor(private svc: FindTheSoundsService, private gameTitleSvc: GameTitleService,
    private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.games$ = this.svc.getGames();
    const title = {
      title: this.title,
      titleActions: [
        {
          action: this.openDialog.bind(this),
          matIcon: 'library_add'
        }
      ]
    };
    this.gameTitleSvc.setTitle(title);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GameCreationDialogComponent, {
      width: '350px',
      data: { game: this.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.svc.createGame(result);
      }
    });
  }

  solve(game: IAntonymGame) {
    this.router.navigateByUrl(`/findthesound/${game.game.id}`);
  }

}
