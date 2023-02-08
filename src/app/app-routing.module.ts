import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{NameEditorComponent} from './name-editor/name-editor.component';
import{SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'signup',component:NameEditorComponent},
  {path:'login',component:SignInComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
