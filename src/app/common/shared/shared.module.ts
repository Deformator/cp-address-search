import { NgModule } from '@angular/core';
import { MatModule } from './modules/mat-module/mat.module';

@NgModule({
  imports: [MatModule],
  exports: [MatModule],
})
export class SharedModule {}
