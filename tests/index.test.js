const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const asyncWrapper = require('../src');

const { expect } = chai;
chai.use(sinonChai);

describe('test asyncWrapper method', () => {
  it('should catch async function exception', async () => {
    const error = new Error('error msg', 400)
    const foo = asyncWrapper(() => {
      throw error
    });
    expect(foo).to.throw(error)
  });

  it('should call express next when async function exception take place', async () => {
    const error = new Error('error msg')
    const next = sinon.spy();
    const foo = asyncWrapper(async (req, res, next) => {
      throw error
    });
    await foo(null, null, next)
    expect(next).to.have.been.calledWith(error)
  });

  it('should pass additional arguments to the middleware', async () => {
    const next = sinon.spy()
    const args = {
      foo: 'bar',
    };
    const foo = asyncWrapper(async (req, res, next, args) => {
      return args;
    });

    const result = await foo(null, null, next, args);
    expect(result).to.equal(args);
  });
});