import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'party-stats',
    template: `
        <strong>Invited:</strong> {{ invited }}
        <strong>Attending:</strong> {{ attending }}
        <strong>Guests:</strong> {{ guests }}
    `
})
export class PartyStatsComponent {
    @Input() invited;
    @Input() attending;
    @Input() guests;
}
