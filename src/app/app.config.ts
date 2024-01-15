import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxCurrencyInputMode, provideEnvironmentNgxCurrency } from 'ngx-currency';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideEnvironmentNgxCurrency({
      align: "left",
      allowNegative: false,
      prefix: "",
      inputMode: NgxCurrencyInputMode.Financial,
    }),
  ]
};
