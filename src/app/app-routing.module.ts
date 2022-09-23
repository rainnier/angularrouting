import { DeactivateGuard } from './guards/deactivate.guard';
import { LoadGuard } from './guards/load.guard';
import { BlogResolver } from './resolvers/blog.resolver';
import { ComponentChildTwoComponent } from './component-child-two/component-child-two.component';
import { ComponentChildOneComponent } from './component-child-one/component-child-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ActivateGuard } from './guards/activate.guard';
import { ActivatechildGuard } from './guards/activatechild.guard';

const routes: Routes = [
  {
    path: "",
    component: ComponentOneComponent
    // redirectTo: "three",
    // pathMatch: "full"
  },
  {
    path: "book",
    component: ComponentOneComponent
    // redirectTo: "three",
    // pathMatch: "full"
  },
  {
    path: "two",
    canActivateChild: [ActivatechildGuard],
    component: ComponentTwoComponent,
    children: [
      {
        path: "child-one",
        component: ComponentChildOneComponent
      },
      {
        path: "child-two",
        component: ComponentChildTwoComponent
      }
    ]
  },
  {
    path: "three",
    canDeactivate: [DeactivateGuard],
    component: ComponentThreeComponent
  },
  {
    path: "four",
    canLoad: [LoadGuard],
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
