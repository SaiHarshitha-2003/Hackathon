import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamRegistrationComponent } from './team-registration/team-registration.component';
import { MentorRegistrationComponent } from './mentor-registration/mentor-registration.component';
import { VoteForIdeaComponent } from './vote-for-idea/vote-for-idea.component';
import { CheckpointSubmissionComponent } from './checkpoint-submission/checkpoint-submission.component';
import { ChatComponent } from './chat/chat.component';
import { JuryComponent } from './jury/jury.component';

const routes: Routes = [
  {path:'register',component:TeamRegistrationComponent},
  {path:'mentor-registration',component:MentorRegistrationComponent},
  {path:'vote-for-idea',component:VoteForIdeaComponent},
  {path:'submit-checkpoint',component:CheckpointSubmissionComponent},
  {path:'chat',component:ChatComponent},
  {path:'jury',component:JuryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
