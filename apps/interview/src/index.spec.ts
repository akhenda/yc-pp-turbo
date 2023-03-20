import { getMessage } from ".";

describe('index', () => {
  describe('index#getMessage()', () => {
    it('should return a message', () => {
      const message = getMessage();
      expect(message).toEqual('Hello world!');
    });
  });
});
