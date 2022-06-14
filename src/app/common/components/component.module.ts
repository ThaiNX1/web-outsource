import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule,
    NzEmptyModule,
    NzTableModule,
  ],
  exports: [TableComponent],
})
export class ComponentModule {}
