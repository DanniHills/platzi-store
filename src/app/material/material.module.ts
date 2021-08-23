import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon'
import { MatBadgeModule} from'@angular/material/badge'
import { MatCardModule} from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';   
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import {LayoutModule} from '@angular/cdk/layout'
import { MatFormFieldModule} from '@angular/material/form-field'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    MatGridListModule,
    MatTreeModule,
    LayoutModule,
    MatFormFieldModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    MatGridListModule,
    MatTreeModule,
    LayoutModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
