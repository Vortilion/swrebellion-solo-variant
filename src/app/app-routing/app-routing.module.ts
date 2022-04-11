import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentPhaseComponent } from '../assignment-phase/assignment-phase.component';
import { CommandPhaseComponent } from '../command-phase/command-phase.component';
import { RefreshPhaseComponent } from '../refresh-phase/refresh-phase.component';
import { SetupPhaseComponent } from '../setup-phase/setup-phase.component';

const routes: Routes = [
    {path: '', redirectTo: '/setup', pathMatch: 'full' },
    {path: 'setup', component: SetupPhaseComponent},
    {path: 'assignment', component: AssignmentPhaseComponent},
    {path: 'command', component: CommandPhaseComponent},
    {path: 'refresh', component: RefreshPhaseComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
