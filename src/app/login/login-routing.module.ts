import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormLoginComponent} from './components/form-login/form-login.component'
import { FormRegistroComponent} from './components/form-registro/form-registro.component'
const routes: Routes = [
  {
    path:'',
    component:FormLoginComponent ,
  },
      {
        path:'register',
        component: FormRegistroComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class LoginRoutingModule { }
