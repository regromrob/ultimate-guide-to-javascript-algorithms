const pigLatin = require('./index-START');

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function');
});

test('Converts a one-word string into Pig Latin', () => {
  expect(pigLatin('buzzfeed')).toEqual('uzzfeedbay');
});

test('Converts a one-word string into Pig Latin', () => {
  expect(pigLatin('gratitude')).toEqual('atitudegray');
});

test('Convert a one-word string starting with a vowel into Pig Latin', () => {
    expect(pigLatin('ouch')).toEqual('ouchway');
})