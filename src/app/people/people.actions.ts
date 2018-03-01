import { Action } from '@ngrx/store';
import { People } from './people.model';

/** Add Person */
export const ADD_PERSON = '[People] Add';
export class AddPerson implements Action {
    readonly type = ADD_PERSON;

    constructor(public payload: People) { }
}

/** Remove Person */
export const REMOVE_PERSON = '[People] Remove';
export class RemovePerson implements Action {
    readonly type = REMOVE_PERSON;

    constructor(public payload: string) { }
}

/** Add Guest */
export const ADD_GUEST = 'ADD_GUEST';
export class AddGuest implements Action {
    readonly type = ADD_GUEST;

    constructor(public payload: string) { }
}

/** Remove Guest */
export const REMOVE_GUEST = 'REMOVE_GUEST';
export class RemoveGuest implements Action {
    readonly type = REMOVE_GUEST;

    constructor(public payload: string) { }
}

export const TOGGLE_ATTENDING = 'TOGGLE_ATTENDING';
export class ToggleAttending implements Action {
    readonly type = TOGGLE_ATTENDING;

    constructor(public payload: string) { }
}

/** Export all */
export type All
    = AddPerson
    | RemovePerson
    | AddGuest
    | RemoveGuest
    | ToggleAttending;
