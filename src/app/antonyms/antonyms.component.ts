import { Component, OnInit } from '@angular/core';
import { AntonymsService } from './antonyms.service';
import { Observable } from 'rxjs';
import { IAntonymGame, IState } from '../interfaces';
import { GameTitleService } from '../game-title/game-title.service';
import { MatDialog } from '@angular/material/dialog';
import { GameCreationDialogComponent } from '../game-creation-dialog/game-creation-dialog.component';
import { Router } from '@angular/router';
import { map, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-antonyms',
  templateUrl: './antonyms.component.html',
  styleUrls: ['./antonyms.component.css']
})
export class AntonymsComponent implements OnInit {
  title = 'Antonyms';
  games$: Observable<IState<IAntonymGame[]>>;

  constructor(private svc: AntonymsService, private gameTitleSvc: GameTitleService,
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
      data: {game: this.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       this.svc.createGame(result);
      }
    });
  }

  solve(game: IAntonymGame) {
    this.router.navigateByUrl(`/antonyms/${game.game.id}`);
  }
}
