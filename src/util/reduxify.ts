import {bindActionCreators} from 'redux';
const R = require('ramda');

export default function Reduxify(config) {
  return function(target) {

    attachNgOnInit(target);

    target.prototype.ngOnDestroy = function () {
      this.unsubscribe();
    };

    target.prototype.mapStateToThis = config.mapStateToThis; 

    target.prototype.mapDispatchToThis = function(dispatch) {
      return bindActionCreators(config.actions, dispatch);
    };
  };
}

function attachNgOnInit(target) {
  target.prototype.ngOnInit = target.prototype.ngOnInit ?
    R.compose(target.prototype.ngOnInit, ngOnInit) :
    ngOnInit;
}

function ngOnInit() {
  this.unsubscribe = this.ngRedux.connect(
      this.mapStateToThis,
      this.mapDispatchToThis)(this);
}
