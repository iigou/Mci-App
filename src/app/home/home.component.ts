import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from './info.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games$: Observable<string[]>;

  constructor(private router: Router, private infoSvc: InfoService) { }

  ngOnInit() {
    this.games$ = this.infoSvc.getGames();
  }

  navigateTo(game: string) {
    this.router.navigateByUrl(`/${game.toLowerCase()}`);
  }

}
