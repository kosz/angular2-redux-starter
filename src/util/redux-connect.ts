import {bindActionCreators} from 'redux';
import mergeAndAttach from './merge-and-attach';

export default function ReduxConnect(config) {
  return function(target) {

    mergeAndAttach(target.prototype, 'ngOnInit', ngOnInit);
    mergeAndAttach(target.prototype, 'ngOnDestroy', ngOnDestroy);

    target.prototype.mapStateToThis = config.mapStateToThis; 

    target.prototype.mapDispatchToThis = function(dispatch) {
      return bindActionCreators(config.actions, dispatch);
    };
    
  };
}

function ngOnInit() {
  this.unsubscribe = this.ngRedux.connect(
    this.mapStateToThis,
    this.mapDispatchToThis)(this);
}

function ngOnDestroy () {
  this.unsubscribe();
}
