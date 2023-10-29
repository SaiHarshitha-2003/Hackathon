import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamRegistrationComponent } from './team-registration/team-registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MentorRegistrationComponent } from './mentor-registration/mentor-registration.component';
import { VoteForIdeaComponent } from './vote-for-idea/vote-for-idea.component';
import { CheckpointSubmissionComponent } from './checkpoint-submission/checkpoint-submission.component';
import { ChatComponent } from './chat/chat.component';
import { JuryComponent } from './jury/jury.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamRegistrationComponent,
    MentorRegistrationComponent,
    VoteForIdeaComponent,
    CheckpointSubmissionComponent,
    ChatComponent,
    JuryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
