import { Component, ChangeDetectionStrategy, state } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from './app.reducer';
import * as PeopleActions from './people/people.actions';
import { id } from './id';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { partyModel, percentAttending } from './app.selectors';

@Component({
  selector: 'app-root',
  template: `
    <h3>@ngrx/store planner</h3>
    <div class="margin-bottom-10">
      Percent Attendance: {{ percentAttendance | async }}%
    </div>

    <party-stats
      [invited]="(model | async)?.total"
      [attending]="(model | async)?.attending"
      [guests]="(model | async)?.guests">

      {{ guests | async | json }}

    </party-stats>

    <filter-select
      (updateFilter)="updateFilter($event)">
    </filter-select>

    <person-input (addPerson)="addPerson($event)">
    </person-input>

    <person-list
      [people]="(model | async)?.people"
      (addGuest)="addGuest($event)"
      (removeGuest)="removeGuest($event)"
      (removePerson)="removePerson($event)"
      (toggleAttending)="toggleAttending($event)">
    </person-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public model;
  public percentAttendance;

  constructor(private _store: Store<AppState>) {
    this.model = Observable.combineLatest(
      _store.select('people'),
      _store.select('partyFilter')
    )
    .let(partyModel());

    this.percentAttendance = _store.let(percentAttending());
  }

  addPerson(name: string): void {
    this._store.dispatch({ type: PeopleActions.ADD_PERSON, payload: { id: id(), name: name } });
  }

  addGuest(id: number): void {
    this._store.dispatch({ type: PeopleActions.ADD_GUEST, payload: id });
  }

  removeGuest(id: number): void {
    this._store.dispatch({ type: PeopleActions.REMOVE_GUEST, payload: id });
  }

  removePerson(id: number): void {
    this._store.dispatch({ type: PeopleActions.REMOVE_PERSON, payload: id });
  }

  toggleAttending(id: number): void {
    this._store.dispatch({ type: PeopleActions.TOGGLE_ATTENDING, payload: id });
  }

  updateFilter(filter: any): void {
    this._store.dispatch({ type: filter });
  }
}
