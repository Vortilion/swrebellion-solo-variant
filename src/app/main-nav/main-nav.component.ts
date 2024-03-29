import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApplicationConfigService } from '../shared/application-config.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
    useExpansionUnitsSelected = false;
    useAdvancedTacticCardsSelected = false;
    movementVariantSelected = false;
    deploymentVariantSelected = false;
    unplayableMissionsVariantSelected = false;
    assignmentActionCardSelected = false;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
        map(result => result.matches),
        shareReplay()
        );

    constructor(
        private breakpointObserver: BreakpointObserver,
        private applicationConfigService: ApplicationConfigService) {}

}
