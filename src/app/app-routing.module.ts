import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/Router';


const approutes:Routes=[];

@NgModule({
    imports:[RouterModule.forRoot(approutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}