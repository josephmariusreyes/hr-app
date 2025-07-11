import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { AppComponent } from './app.component';
import { mainRoutes } from './routes/app.routes';
import { AppState } from './core/state/app.state';
import { userReducer } from './core/state/user';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    RouterModule.forRoot(mainRoutes),
    StoreModule.forRoot<AppState>({ user: userReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    // ...PrimeNG modules as needed
  ],
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
    // ...other providers
  ]
})
export class AppModule {}
