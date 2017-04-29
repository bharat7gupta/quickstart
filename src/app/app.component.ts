import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                <h1>My First Attribute Directive</h1>
                <p [highlight]="'blue'">Highlight me!</p>
                <h1>{{title}}</h1>
                <nav>
                    <a routerLink="/dashboard" routerLinkActivate="active">Dashboard</a>
                    <a routerLink="/heroes" routerLinkActivate="active">Heroes</a>
                </nav>
                <router-outlet></router-outlet>
              `,
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {
    title: string = "Tour of Heroes";
}