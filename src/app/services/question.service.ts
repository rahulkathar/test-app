import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionService {

    constructor(private http: HttpClient) {

    }

    fetchQuestions(): Observable<Question[]> {

        return this.http.get<Question[]>('assets/data/test.json');
    }
}
