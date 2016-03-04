import {Component, View, Inject, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
//import configureStore from './store/configure-store';
import App from './containers/app';
//const provider = require('ng2-redux').provider;
//const store = configureStore();
declare let __PRODUCTION__: any;

import {provideStore} from '@ngrx/store';
import {counter} from './ngrx/counter';
import {stor} from './ngrx/stor';


if (__PRODUCTION__) {
  enableProdMode();
}

//bootstrap(App, [ provider(store) ]);
bootstrap(App, [ provideStore({counter, stor}, 
      {counter: 0, stor: new Date().toString()}) ]);
