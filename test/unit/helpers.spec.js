/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import { signToken, hashPassword, comparePassword } from '../../server/utils/helpers';

chai.use(chaiHTTP);

describe('Helpers', () => {
  describe('signToken', () => {
    it('should create an auth token', () => {
      const user = { id: 1, isAdmin: true };
      expect(signToken(user)).to.be.a('string');
    });
  });

  describe('hashPassword', () => {
    it('should hash a password string', () => {
      const password = 'cookies';
      expect(hashPassword(password)).to.be.a('string');
      expect(hashPassword(password)).to.contain('$');
    });
  });

  describe('comparePassword', () => {
    it('should return true successfully compare hash and password', () => {
      const password = 'cookies';
      const hash = hashPassword(password);
      expect(comparePassword(password, hash)).to.be.true;
      expect(comparePassword('wrong-password', hash)).to.be.false;
    });
  });
});
