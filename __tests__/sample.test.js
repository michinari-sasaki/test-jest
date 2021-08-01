const Main = require('../js/foo.js');
const main = new Main();

it('関数SUMのテスト', () => {
  expect(main.sum(1, 2)).toBe(-1);
});
it('挨拶のテスト', () => {
  expect(main.greet('山田', '孝之')).toBe('こんにちわ山田孝之さん！');
});
