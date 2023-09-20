import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {selectComponent} from './select/select.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [ 
  { path: '', component: selectComponent },
   { path: 'question/:id', component: QuestionsComponent },
{ path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
