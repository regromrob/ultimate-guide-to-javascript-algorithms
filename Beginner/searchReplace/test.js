const searchReplace = require('./index-START');

test('searchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

test('Replaces a word in string with a different word (case sensitive).', () => {
  expect(searchReplace('I freaking love coding!', 'coding', 'pizza')).toEqual('I freaking love pizza!');
});

test('Replaces a word in string with a different word (case sensitive).', () => {
  expect(searchReplace('Fool me once, shame on you', 'once', 'twice')).toEqual('Fool me twice, shame on you');
});

test('Replaces a word in string with a different word (case sensitive).', () => {
  expect(searchReplace('Rain on the green grass, rain on the trees', 'grass', 'glass')).toEqual('Rain on the green glass, rain on the trees');
});

test('Replaces a word in string with a different word (case sensitive).', () => {
  expect(searchReplace('Meet n greet', 'n', 'and')).toEqual('Meet and greet');
});