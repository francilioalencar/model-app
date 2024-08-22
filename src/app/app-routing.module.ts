import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedinComponent } from './component/linkedin/linkedin.component';
import { AngularComponent } from './component/angular/angular.component';
import { ProdutoComponent } from './component/produto/produto.component';
import { CardComponent } from './component/card/card.component';

const routes: Routes = [
  {path: "", component: AngularComponent, pathMatch:'full'},
  {path: "produtos", component: ProdutoComponent},
  {path: "angular", component: AngularComponent},
  {path: "***", redirectTo : "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
