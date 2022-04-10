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
        label: 'Setup Phase',
        link: 'setup'
    }, {
        label: 'Assignment Phase',
        link: 'assignment'
    }, {
        label: 'Command Phase',
        link: 'command'
    }, {
        label: 'Refresh Phase',
        link: 'refresh'
    }];

    constructor() {

    }

    ngOnInit(): void {

    }
}
