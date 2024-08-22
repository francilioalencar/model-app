import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LinkedinComponent } from './component/linkedin/linkedin.component';
import { AngularComponent } from './component/angular/angular.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProdutoComponent } from './component/produto/produto.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LinkedinComponent,
    AngularComponent,
    ProdutoComponent,
    CardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
