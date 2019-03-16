import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';
import { HomeComponent } from './components/home/home.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { QuestionAreaComponent } from './components/question-area/question-area.component';
import { TestResultComponent } from './components/test-result/test-result.component';
import { HeaderComponent } from './components/header/header.component';
import { RadioOptionsPipe } from './pipes/radio-options.pipe';
import { TimeStringPipe } from './pipes/time-string.pipe';
import {NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RadioGroupComponent,
    QuestionAreaComponent,
    TestResultComponent,
    HeaderComponent,
    RadioOptionsPipe,
    TimeStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    HttpClientModule
  ],
  providers: [QuestionService, AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
