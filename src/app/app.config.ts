import { isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { provideHttpClient } from '@angular/common/http';

import { mainRoutes } from './routes/app.routes';
import { AppState } from './core/state/app.state';
import { userReducer } from './core/state/user';

export const appConfig = [
  provideRouter(mainRoutes),
  provideStore({ userW: userReducer }),
  provideEffects([]),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  provideAnimations(),
  providePrimeNG({
    theme: {
      preset: Aura
    }
  })
  ,provideHttpClient()
];
