import { Component } from '@angular/core';
import { ApplicationConfigService } from '../shared/application-config.service';

@Component({
  selector: 'setup-phase',
  templateUrl: './setup-phase.component.html'
})
export class SetupPhaseComponent {
  title = 'Setup Phase';

  constructor(
    private applicationConfigService: ApplicationConfigService
  ) {

  }
}
