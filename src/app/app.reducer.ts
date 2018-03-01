import { ActionReducer, combineReducers } from '@ngrx/store';

import { People } from './people/people.model';
import { PeopleReducer } from './people/people.reducer';
import { PartyFilterReducer } from './people/party-filter.reducer';

export interface AppState {
    people: People[];
    partyFilter: any;
}

const rootReducer: ActionReducer<AppState> = combineReducers<AppState>({
    people: PeopleReducer,
    partyFilter: PartyFilterReducer
});

export default rootReducer;
