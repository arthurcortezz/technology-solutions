import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { routes } from './app-routing';
import { AppComponent } from './app.component';

const config: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
