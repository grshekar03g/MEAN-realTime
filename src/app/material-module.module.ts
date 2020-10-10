import { NgModule } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
// import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';

export const arr:any[]=[MatTableModule,MatIconModule,MatMenuModule,
  MatTabsModule,MatPaginatorModule,MatSortModule,MatFormFieldModule,MatInputModule]


@NgModule({
  
  imports: [arr],
  exports:[arr]
})
export class MaterialModuleModule { }
