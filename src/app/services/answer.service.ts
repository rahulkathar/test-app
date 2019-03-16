import { Injectable } from '@angular/core';

@Injectable()
export class AnswerService {
    answers: Array<string> = [];
    correctAnswerCount: number;

    setCorrectAnswerCount(correctAnswerCount: number) {
        this.correctAnswerCount = correctAnswerCount;
    }

    getAnswers() {
        return this.answers;
    }

    setAnswer(questionIndex: number, answer: string, actualAnswer: string): any {
        this.answers[questionIndex] = answer;
    }
}
