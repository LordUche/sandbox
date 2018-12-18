/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';

chai.use(chaiHTTP);

describe('Helpers', () => {
  it('should be truthy', () => {
    expect(true).to.be.true;
  });
});
