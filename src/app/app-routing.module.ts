import { BlogResolver } from './resolvers/blog.resolver';
import { ComponentChildTwoComponent } from './component-child-two/component-child-two.component';
import { ComponentChildOneComponent } from './component-child-one/component-child-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentThreeComponent } from './component-three/component-three.component';

const routes: Routes = [
  {
    path: "",
    component: ComponentOneComponent
    // redirectTo: "three",
    // pathMatch: "full"
  },
  {
    path: "two",
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
    resolve: {
      blogs: BlogResolver
    },
    component: ComponentThreeComponent
  },
  {
    path: "four",
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
