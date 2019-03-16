import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RadioOption } from 'src/app/models/radio-option';
import { generateUUID } from 'src/app/helpers/utils';

@Component({
    selector: 'app-radio-group',
    templateUrl: './radio-group.component.html',
    styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent {

    name = generateUUID();
    @Input() options: RadioOption[];
    @Input() selected: RadioOption;
    @Output() selectedChange: EventEmitter<RadioOption> = new EventEmitter();

    onChange(event: any, option: RadioOption) {
        this.selectedChange.emit(event.target.checked ? option as any : null);
    }
}
