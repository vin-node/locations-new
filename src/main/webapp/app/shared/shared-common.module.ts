import { NgModule } from '@angular/core';

import { LocationsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LocationsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LocationsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LocationsSharedCommonModule {}
