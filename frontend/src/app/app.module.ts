
// Libraries: will be in imports: [] 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';

// Services: will be in providers:[]
import { TaskService } from './shared/task.service';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes =[
  { path:'', component: HomeComponent },
  { path:'list', component: ListComponent },
  { path: 'createUpdate', component: CreateUpdateComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
