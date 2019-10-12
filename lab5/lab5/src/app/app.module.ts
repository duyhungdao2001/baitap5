import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HCMComponent } from './hcm/hcm.component';
import { from } from 'rxjs';
import { TtsvComponent } from './ttsv/ttsv.component';
import { TtttComponent } from './tttt/tttt.component';
import { BhgkComponent } from './bhgk/bhgk.component';
import { Form5Component } from './form5/form5.component';

@NgModule({
  declarations: [
    AppComponent,
    HCMComponent,
    TtsvComponent,
    TtttComponent,
    BhgkComponent,
    Form5Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HCMComponent},
      {path: 'hcm', component:HCMComponent},
      {path: 'ttsv', component:TtsvComponent},
      {path: 'tttt', component:TtttComponent},
      {path: 'bhgk', component:BhgkComponent},
      {path: 'form5', component:Form5Component},
      {path: 'hcm/productld', component:HCMComponent},
      {path:'**', redirectTo: '', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
