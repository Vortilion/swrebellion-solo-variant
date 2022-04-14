import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'swrebellion-solo-variant';
    background: ThemePalette = 'primary';
    navLinks = [{
        icon: 'settings',
        label: 'Setup Phase',
        link: 'setup'
    }, {
        icon: 'assignment',
        label: 'Assignment Phase',
        link: 'assignment'
    }, {
        icon: 'military_tech',
        label: 'Command Phase',
        link: 'command'
    }, {
        icon: 'refresh',
        label: 'Refresh Phase',
        link: 'refresh'
    }];

    constructor() {

    }

    ngOnInit(): void {

    }
}
