import { Pipe, PipeTransform } from '@angular/core';
import { RadioOption } from '../models/radio-option';

@Pipe({
    name: 'radioOptions'
})
export class RadioOptionsPipe implements PipeTransform {

    transform(input: Array<string>): Array<RadioOption> {

        return (input || []).map(val => (<RadioOption>{
            value: val,
            label: val
        }));
    }
}
