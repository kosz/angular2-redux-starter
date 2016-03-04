import {Component, View} from 'angular2/core';

@Component({
  selector: 'counter',
  inputs: [
    'counter',
    'increment',
    'decrement',
    'stor',
    'incrementAsync'
  ]
})
@View({
  template: `
  <p>
    Clicked: {{ counter | async }} times
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
    <button (click)="stor()">Stor</button>
    <button (click)="incrementAsync()">Increment async</button>
  </p>
  `
})
export class Counter {
}
