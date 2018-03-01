import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'person-list',
    template: `
        <ul>
            <li
                *ngFor="let person of people"
                [class.attending]="person.attending">
                {{ person.name }} - Guests: {{ person.guests }}
                <button (click)="addGuest.emit(person.id)">+</button>
                <button *ngIf="person.guests" (click)="removeGuest.emit(person.id)">-</button>
                Attending?
                <input type="checkbox"
                    [checked]="person.attending"
                    (change)="toggleAttending.emit(person.id)" />
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PersonListComponent {
    @Input() people;
    @Output() addGuest = new EventEmitter();
    @Output() removeGuest = new EventEmitter();
    @Output() removePerson = new EventEmitter();
    @Output() toggleAttending = new EventEmitter();
}
