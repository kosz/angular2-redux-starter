import {Component, View, Inject, OnDestroy, OnInit} from 'angular2/core';
import {Counter} from '../components/counter';
import {Store} from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from '../ngrx/counter';
import {CHANGE} from '../ngrx/stor';
import {Observable} from 'rxjs/Observable';
//import * as CounterActions from '../actions/counter';
//import ReduxConnect from '../util/redux-connect';

@Component({
  selector: 'root'
})
@View({
  directives: [Counter],
  template: `
  {{ stor | async }}
  <counter [counter]="counter"
    [increment]="increment"
    [decrement]="decrement"
    [stor]="asdf"
    [incrementAsync]="incrementAsync">
  </counter>
  `
})
//@ReduxConnect({
//  actions: CounterActions,
//  mapStateToThis: (state) => ({counter: state.counter})
//})
export default class App {
  counter: Observable<number>;
  constructor(@Inject public store: Store<number>) {
    this.counter = store.select('counter');
    this.stor = store.select('stor');
  }
  increment = () => {
    this.store.dispatch({ type: INCREMENT });
  };
  decrement = () => {
    this.store.dispatch({ type: DECREMENT });
  };
  asdf = () => {
    this.store.dispatch({ type: CHANGE });
  };
}
