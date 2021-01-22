import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [CoreModule, SharedModule],
  exports: [CoreModule, SharedModule],
  providers: [],
})
export class AppCommonModule {}
