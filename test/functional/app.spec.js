import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import server from '../../server/app';

chai.use(chaiHTTP);

describe('App', () => {
  it('should respond with status 200', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.eq(200);
        done(err);
      });
  });
});
