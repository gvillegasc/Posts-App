import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Http
import { HttpClientModule } from '@angular/common/http';

// Services
import { ServiceModule } from './services/service.module';

// Componentes
import { ComponentModule } from './components/component.module';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { modalReducer } from './reducers/modal.reducer';
import { postReducer } from './reducers/post.reducer';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceModule,
    ComponentModule,
    StoreModule.forRoot({ modal: modalReducer, post: postReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
