import { Action } from '@ngrx/store';

/** Show who is attending */
export const SHOW_ATTENDING = '[PartyFilter] Show attending';
export class ShowAttending implements Action {
    readonly type = SHOW_ATTENDING;

    constructor() { }
}

/** Show all invited */
export const SHOW_ALL = '[PartyFilter] Show all';
export class ShowAll implements Action {
    readonly type = SHOW_ALL;

    constructor() { }
}

/** Show w/ guets */
export const SHOW_WITH_GUESTS = '[PartyFilter] Show guests';
export class ShowWithGuests implements Action {
    readonly type = SHOW_WITH_GUESTS;

    constructor() { }
}

/** Export all */
export type All
    = ShowAttending
    | ShowAll
    | ShowWithGuests;
