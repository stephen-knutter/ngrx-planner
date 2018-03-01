import * as PeopleActions from './people.actions';
import { People } from './people.model';

export type Action = PeopleActions.All;

// details function helper
const details = (state, action) => {
    switch (action.type) {
        case PeopleActions.ADD_GUEST:
            if (state.id === action.payload) {
                return Object.assign({}, state, { guests: state.guests + 1 });
            }
            return state;

        case PeopleActions.REMOVE_GUEST:
            if (state.id === action.payload) {
                return Object.assign({}, state, { guests: state.guests - 1 });
            }
            return state;

        case PeopleActions.TOGGLE_ATTENDING:
            if (state.id === action.payload) {
                return Object.assign({}, state, { attending: !state.attending });
            }
            return state;

        default:
            return state;
    }
};

// Default state
const defaultState: People[] = [];

// People Reducer
export const PeopleReducer =
    (state: People[] = defaultState, action: Action) => {
        switch (action.type) {
            case PeopleActions.ADD_PERSON:
                return [
                    ...state,
                    Object.assign({}, {id: action.payload.id, name: action.payload.name, guests: 0, attending: false })
                ];

            case PeopleActions.REMOVE_PERSON:
                return state.filter(person => person.id !== action.payload);

            case PeopleActions.ADD_GUEST:
                return state.map(person => details(person, action));

            case PeopleActions.REMOVE_GUEST:
                return state.map(person => details(person, action));

            case PeopleActions.TOGGLE_ATTENDING:
                return state.map(person => details(person, action));

            default:
                return state;
        }
    };
