import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComAllComponent } from './com-all/com-all.component';
import { QTOptionsComponent } from './qtoptions/qtoptions.component';

import { DataService } from './data.service';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Food', component: ComAllComponent },
  { path: 'Drinks', component: ComAllComponent },
  { path: 'Explore', component: ComAllComponent },
  { path: 'QTOptions', component: QTOptionsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComAllComponent,
    QTOptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }