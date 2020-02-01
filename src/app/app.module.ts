import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { AntonymsComponent } from './antonyms/antonyms.component';
import { FindTheSoundComponent } from './findthesound/findthesound.component';
import { SetupComponent } from './setup/setup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import { AuthHeaderInterceptor } from './auth/auth-header.Interceptor';
import { GameTitleComponent } from './game-title/game-title.component';
import { GameCreationDialogComponent } from './game-creation-dialog/game-creation-dialog.component';
import { AntonymComponent } from './antonym/antonym.component';

@NgModule({
  declarations: [
    AppComponent,
    AntonymsComponent,
    FindTheSoundComponent,
    SetupComponent,
    HomeComponent,
    GameTitleComponent,
    GameCreationDialogComponent,
    AntonymComponent
  ],
  entryComponents: [
    AntonymsComponent,
    GameCreationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatRippleModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
