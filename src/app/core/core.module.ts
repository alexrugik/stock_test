import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorTokenService } from '@app/core/services/interceptor-token.service';
import { TokenService } from '@app/core/services/token.service';

@NgModule({
  providers: [
    TokenService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorTokenService, multi: true},
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
