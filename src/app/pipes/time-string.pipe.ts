import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'timeString'
})
export class TimeStringPipe implements PipeTransform {

    transform(value): string {

        return value? moment.utc(value).format('H[h]:mm[m]:ss[s]'): '';
    }
}
