import {Component, View, Inject, OnDestroy, OnInit} from 'angular2/core';
import {Counter} from '../components/counter';
import * as CounterActions from '../actions/counter';
import Reduxify from '../util/reduxify';

@Component({
  selector: 'root'
})
@View({
  directives: [Counter],
  template: `
  <counter [counter]="counter"
    [increment]="increment"
    [decrement]="decrement"
    [incrementIfOdd]="incrementIfOdd"
    [incrementAsync]="incrementAsync">
  </counter>
  `
})
@Reduxify({
  actions: CounterActions,
  mapStateToThis: (state) => ({counter: state.counter})
})
export default class App {
  constructor( @Inject('ngRedux') private ngRedux) { }
}
