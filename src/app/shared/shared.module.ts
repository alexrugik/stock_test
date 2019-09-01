import { NgModule } from '@angular/core';
import { AppDependenciesModule } from '@app/app.dependencies';
import { SHARED_COMPONENTS, SHARED_ENTRY_COMPONENTS } from '@app/shared/components';

@NgModule({
  imports: [
    AppDependenciesModule
  ],
  declarations: [
    ...SHARED_COMPONENTS
  ],
  exports: [
    ...SHARED_COMPONENTS
  ],
  entryComponents: [
    ...SHARED_ENTRY_COMPONENTS
  ]
})
export class SharedModule {
}
