import mergeAndAttach from './merge-and-attach';

describe('.composeIfNeeded', () => {

  it('attaches a new method to an object', () => {

    let testObj = {};

    function testFunction() {

    }

    mergeAndAttach(testObj, 'testFunction', testFunction);
    chai.expect(testObj.testFunction).to.be.a('function');

  });

  context('if a method with that name already exists on the object', () => {

    let spy = sinon.spy();
    let secondSpy = sinon.spy();

    let testObj = {
      testFunction: secondSpy
    };

    let testFunction = spy;
    let mockArgument = 'hello';


    it('composes the functions', () => {

      mergeAndAttach(testObj, 'testFunction', testFunction);
      testObj.testFunction(mockArgument);

      chai.expect(spy.callCount).to.equal(1);
      chai.expect(secondSpy.callCount).to.equal(1);
      chai.expect(spy.calledWith(mockArgument)).to.equal(true);
      chai.expect(secondSpy.calledWith(mockArgument)).to.equal(true);

    });

  });

});
