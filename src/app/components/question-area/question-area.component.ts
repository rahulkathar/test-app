import { Component, Input, Output } from '@angular/core';
import { Question } from 'src/app/models/question';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-question-area',
    templateUrl: './question-area.component.html',
    styleUrls: ['./question-area.component.scss']
})
export class QuestionAreaComponent {

    @Input() question: Question;
    @Input() answer: string;
    @Output() answerChange = new EventEmitter();
}
