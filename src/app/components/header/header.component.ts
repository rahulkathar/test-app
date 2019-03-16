import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    questions: Array<number>;
    _maxTime: number;
    @Input('noOfQuestions') set noOfQuestions(noOfQuestions: number) {
        this.questions  = Array(noOfQuestions);
    }
    @Input() set maxTime(maxTime: number) {
        this._maxTime = maxTime;
        this.timer = interval(1000).pipe(map((val) => this._maxTime - val * 1000), tap(val => {
            if (val === 0) {
                this.timeCompleted.emit();
            }
        }));
    }
    @Input() activeQuestionIndex:number;
    @Input() answers: Array<any> = [];
    @Output() timeCompleted = new EventEmitter();
    @Input() selectedQuestion = new EventEmitter();
    @Input() selectedQuestionChange = new EventEmitter();
    timer: Observable<number>;
}
