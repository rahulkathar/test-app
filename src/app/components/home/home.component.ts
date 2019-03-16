import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { AnswerService } from 'src/app/services/answer.service';
import { share } from 'rxjs/internal/operators/share';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    questions = this.questionService.fetchQuestions().pipe(share());
    activeQuestionIndex = 0;
    answers = this.answerService.getAnswers();
    @ViewChild('content')
    private content: TemplateRef<any>;

    constructor(private questionService: QuestionService,
        private answerService: AnswerService,
        private modalService: NgbModal,
        private router: Router) { }

    answerChange(answer: string, actualAnswer: string) {
        this.answerService.setAnswer(this.activeQuestionIndex, answer, actualAnswer);
    }

    submitTest() {
        this.modalService.open(this.content).result.then((questions: Array<any>) => {
            this.answerService.setCorrectAnswerCount(questions
                .map((question) => question.answer).filter((answer, index) => answer === this.answers[index]).length);
            this.router.navigate(['result']);
        });
    }

    nextClickHandler() {
        this.activeQuestionIndex++;
    }

    prevClickHandler() {
        this.activeQuestionIndex--;
    }
}
