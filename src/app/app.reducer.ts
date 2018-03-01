import { People } from './people/people.model';

import { PeopleReducer } from './people/people.reducer';
import { PartyFilterReducer } from './people/party-filter.reducer';

export interface AppState {
    people: People[];
    partyFilter: any;
}

const rootReducer = {
    people: PeopleReducer,
    partyFilter: PartyFilterReducer
};

export default rootReducer;
