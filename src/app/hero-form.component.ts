import { Component } from '@angular/core';

import { ModernHero } from './modern-hero';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {

    powers:string[] = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];

    model = new ModernHero(10, "Flash", this.powers[0], "Barry");

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    newHero() {
        this.model = new ModernHero(42, '', '');
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}