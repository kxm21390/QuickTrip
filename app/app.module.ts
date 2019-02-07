import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComAllComponent } from './com-all/com-all.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Food', component: ComAllComponent },
  { path: 'Drinks', component: ComAllComponent },
  { path: 'Explore', component: ComAllComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComAllComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
