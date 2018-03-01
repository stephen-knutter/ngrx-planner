import {
    Component,
    Output,
    EventEmitter
} from '@angular/core';

import * as PartyFilterActions from '../people/party-filter.actions';

@Component({
    selector: 'filter-select',
    template: `
        <div class="margin-bottom-10">
            <select #selectList (change)="updateFilter.emit(selectList.value)">
                <option *ngFor="let filter of filters" value="{{ filter.action }}">
                    {{ filter.friendly }}
                </option>
            </select>
        </div>
    `
})
export class FilterSelectComponent {
    public filters = [
        { friendly: 'All', action: PartyFilterActions.SHOW_ALL },
        { friendly: 'Atteding', action: PartyFilterActions.SHOW_ATTENDING },
        { friendly: 'Attending w/ Guests', action: PartyFilterActions.SHOW_WITH_GUESTS }
    ];
    @Output() updateFilter: EventEmitter<string> = new EventEmitter<string>();
}
