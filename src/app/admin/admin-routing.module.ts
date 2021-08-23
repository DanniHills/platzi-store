import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from  './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TreeComponent } from './components/tree/tree.component'
import { ProductsListComponent } from './components/products-list/products-list.component'
import { OrderListComponent } from './components/order-list/order-list.component'
const routes: Routes = [

  {
    path:'',
    component: NavComponent,
    children:[
      {
        path:'create',
        component: ProductFormComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'table',
        component: TableComponent
      },
      {
        path:'products',
        component: ProductsListComponent
      },
      {
        path: 'tree',
        component: TreeComponent   
      },
      {
        path: 'order',
        component: OrderListComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
