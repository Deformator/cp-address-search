import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const SHARED_MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  imports: [],
  exports: [...SHARED_MATERIAL_MODULES],
})
export class MatModule {}
