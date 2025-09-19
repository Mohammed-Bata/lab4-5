import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css',
})
export class Clock implements OnInit, OnDestroy {
  currentTime: string = '';
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.updateTime(), 1000);
    console.log(this.intervalId);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log('Clock stopped');
  }
  private updateTime() {
    this.currentTime = new Date().toLocaleString();
    console.log('keep update');
  }
}
