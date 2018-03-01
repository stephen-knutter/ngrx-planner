import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartyStatsComponent } from './party-stats/party-stats.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { PersonListComponent } from './person-list/person-list.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import rootReducer from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PartyStatsComponent,
    FilterSelectComponent,
    PersonInputComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot( { reducer: rootReducer } ),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
