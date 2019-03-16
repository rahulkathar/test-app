import { Component, OnInit } from '@angular/core';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
    selector: 'app-test-result',
    templateUrl: './test-result.component.html',
    styleUrls: ['./test-result-component.scss']
})
export class TestResultComponent implements OnInit {
    correctAnswerCount: number;
    constructor(private answerService: AnswerService) {

    }

    ngOnInit() {
        this.correctAnswerCount = this.answerService.correctAnswerCount;
    }
}
