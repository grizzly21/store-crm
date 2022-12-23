import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AuthContainer} from "./auth/auth-container.component";
import {SiteContainer} from "./site/site-container.component";

import {AnalyticsComponent} from "./site/components/analytics/analytics.component";
import {GoodsComponent} from "./site/components/goods/goods.component";
import {PostingComponent} from "./site/components/goods/goods-components/posting/posting.component";
import {AllGoodsComponent} from "./site/components/goods/goods-components/all-goods/all-goods.component";
import {LeavingsComponent} from "./site/components/goods/goods-components/leavings/leavings.component";
import {InventoryComponent} from "./site/components/goods/goods-components/inventory/inventory.component";

const routes: Routes = [
  {
    path: '', component: AuthContainer, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  },
  {
    path: '', component: SiteContainer, children: [
      {path: '', redirectTo: 'analytics', pathMatch: 'full'},
      {path: 'analytics', component: AnalyticsComponent},
      {
        path: 'goods', component: GoodsComponent, children: [
          {path: '', redirectTo: 'all-goods', pathMatch: 'full'},
          {path: 'all-goods', component: AllGoodsComponent},
          {path: 'posting', component: PostingComponent},
          {path: 'leavings', component: LeavingsComponent},
          {path: 'inventory', component: InventoryComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {

}
