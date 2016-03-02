import Reduxify from './reduxify';

describe('@Reduxify', () => {

  //  it('works kind of like the React Connect', () => {
  //    @Connect(
  //      function() { return { user: state.user }; }, 
  //      function(dispatch) { 
  //        return {
  //      customAction: (asdf) => dispatch(ActionsFile.myAction('1', '2', asdf)
  //        }
  //      }
  //  });

  it('decorates the class with 4 methods', () => {
    @Reduxify({
      actions: {},
      mapStateToThis: () => {}
    })
    class TestClass {}
    let testInstance = new TestClass();

    chai.expect(testInstance.ngOnInit).to.be.a('function');
    chai.expect(testInstance.ngOnDestroy).to.be.a('function');
    chai.expect(testInstance.mapStateToThis).to.be.a('function');
    chai.expect(testInstance.mapDispatchToThis).to.be.a('function');
  });

  it('composes ngOnInit if it`s already declared on the class', () => {

    let spy = sinon.spy();

    @Reduxify({
      actions: {},
      mapStateToThis: () => {}
    })
    class TestClass {
      ngOnInit() {
        spy();
      }
    }
    let testInstance = new TestClass();
    testInstance.ngRedux = {
      connect: function(o, o1) { return function() {}; }
    };
    testInstance.ngOnInit();

    chai.expect(spy.callCount).to.equal(1);

  });

});
