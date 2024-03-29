import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SetupPhaseComponent } from './setup-phase/setup-phase.component';
import { AssignmentPhaseComponent } from './assignment-phase/assignment-phase.component';
import { CommandPhaseComponent } from './command-phase/command-phase.component';
import { RefreshPhaseComponent } from './refresh-phase/refresh-phase.component';

@NgModule({
    declarations: [
        AppComponent,
        MainNavComponent,
        SetupPhaseComponent,
        AssignmentPhaseComponent,
        CommandPhaseComponent,
        RefreshPhaseComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        MaterialModule,
        FlexLayoutModule,
        LayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {

}
