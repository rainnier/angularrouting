import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { LazyModule } from './lazy/lazy.module';
import { ComponentFourComponent } from './lazy/component-four/component-four.component';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentChildOneComponent } from './component-child-one/component-child-one.component';
import { ComponentChildTwoComponent } from './component-child-two/component-child-two.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentChildOneComponent,
    ComponentChildTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeAppFactory(http:HttpClient) : () => Observable<any> {
  return () => http.get(`${environment.url}/blogs`).pipe();
}
