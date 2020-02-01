import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface IGameCreationData {
  data: {
    game: string;
    difficulty: string;
  }
}

@Component({
  selector: 'app-game-creation-dialog',
  templateUrl: './game-creation-dialog.component.html',
  styleUrls: ['./game-creation-dialog.component.css']
})
export class GameCreationDialogComponent {
  options = ["easy", "medium", "hard"]
  constructor(
    public dialogRef: MatDialogRef<GameCreationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGameCreationData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
