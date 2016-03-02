import ReduxConnect from './redux-connect';

describe('@Reduxify', () => {

  it('decorates the class with 4 methods', () => {
    @ReduxConnect({
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

    @ReduxConnect({
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
