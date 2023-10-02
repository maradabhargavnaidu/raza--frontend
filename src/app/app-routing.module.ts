import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todos/todos.component';
import { UpdateComponent } from './components/updateform/update.component';

const routes: Routes = [
  {path:'',component:TodoComponent},
  {path:'update/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
