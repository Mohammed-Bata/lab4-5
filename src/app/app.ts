import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';

import { Footer } from './footer/footer';
import { Clock } from './clock/clock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Clock],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app');
  showClock = true;

  toggleClock() {
    this.showClock = !this.showClock;
  }
}
