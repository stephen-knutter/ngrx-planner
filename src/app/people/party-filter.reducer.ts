import * as PartyFilterActions from './party-filter.actions';
import { People } from './people.model';

export type Action = PartyFilterActions.All;

export const PartyFilterReducer = (state = person => person, action) => {
    switch (action.type) {
        case PartyFilterActions.SHOW_ATTENDING:
            return person => person.attending;

        case PartyFilterActions.SHOW_ALL:
            return person => person as People;

        case PartyFilterActions.SHOW_WITH_GUESTS:
            return person => person.guests;

        default:
            return state;
    }
};
