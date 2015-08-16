import { module, test } from 'qunit';
import { assertThat, Matchers } from 'ember-aupac-mocks';

module('Unit: Matchers');

const {
  empty,
  everyItem,
  hasItem,
  hasItems,
  hasSize,
  isIn,
  oneOf,
  allOf,
  anyOf,
  anything,
  both,
  either,
  equalTo,
  is,
  nil,
  not,
  raises,
  raisesAnything,
  sameAs,
  truth,
  equivalentMap,
  equivalentArray,
  between,
  closeTo,
  divisibleBy,
  even,
  greaterThan,
  greaterThanOrEqualTo,
  lessThan,
  lessThanOrEqualTo,
  notANumber,
  odd,
  zero,
  bool,
  func,
  hasFunction,
  hasMember,
  instanceOf,
  number,
  object,
  string,
  typeOf,
  containsString,
  emailAddress,
  endsWith,
  equalIgnoringCase,
  matches,
  startsWith
  } = Matchers;

test('matchers: empty', function(assert) {
  assert.expect(2);
  assertThat([], empty());
  assertThat('', empty());
});

test('matchers: everyItem', function(assert) {
  assert.expect(2);
  assertThat([1,2,3], everyItem(greaterThan(0)));
  assertThat([1,'1'], everyItem(1));
});

test('matchers: hasItem', function(assert) {
  assert.expect(2);
  assertThat([1,2,3], hasItem(equalTo(3)));
  assertThat([1,2,3], hasItem(3));
});

test('matchers: hasItems', function(assert) {
  assert.expect(3);
  assertThat([1,2,3], hasItems(2,3));
  assertThat([1,2,3], hasItems(greaterThan(2)));
  assertThat([1,2,3], hasItems(1, greaterThan(2)));
});

test('matchers: hasSize', function(assert) {
  assert.expect(5);
  assertThat([1,2,3], hasSize(3));
  assertThat([1,2,3], hasSize(lessThan(5)));
  assertThat('string', hasSize(6));
  assertThat('string', hasSize(greaterThan(3)));
  assertThat({a:1, b:2}, hasSize(equalTo(2)));
});

test('matchers: isIn', function(assert) {
  assert.expect(2);
  assertThat(1, isIn([1,2,3]));
  assertThat(1, isIn(1,2,3));
});

test('matchers: oneOf', function(assert) {
  assert.expect(2);
  assertThat(1, oneOf([1,2,3]));
  assertThat(1, oneOf(1,2,3));
});

test('matchers: allOf', function(assert) {
  assert.expect(2);
  assertThat(5, allOf([greaterThan(0), lessThan(10)]));
  //assertThat(5, allOf([5, lessThan(10)]));
  assertThat(5, allOf(greaterThan(0), lessThan(10)));
  //assertThat(5, allOf(5, lessThan(10)));
});

test('matchers: anyOf', function(assert) {
  assert.expect(2);
  assertThat(5, anyOf([even(), greaterThan(2)]));
  assertThat(5, anyOf(even(), greaterThan(2)));
});

test('matchers: anything', function(assert) {
  assert.expect(2);
  assertThat('string', anything());
  assertThat(null, anything());
});

test('matchers: both', function(assert) {
  assert.expect(1);
  assertThat(10, both(greaterThan(5)).and(even()));
});

test('matchers: either', function(assert) {
  assert.expect(1);
  assertThat(10, either(greaterThan(50)).or(even()));
});

test('matchers: equalTo', function(assert) {
  assert.expect(1);
  assertThat('10', equalTo(10));
});

test('matchers: is', function(assert) {
  assert.expect(2);
  assertThat('10', is(10));
  assertThat('10', is(equalTo(10)));
});

test('matchers: nil', function(assert) {
  assert.expect(2);
  var undef;
  assertThat(undef, nil());
  assertThat(null, nil());
});

test('matchers: not', function(assert) {
  assert.expect(2);
  assertThat(10, not(20));
  assertThat(10, not(equalTo(20)));
});

test('matchers: raises', function(assert) {
  assert.expect(1);

  var MyException = function(message) {
    this.name = 'MyException';
    this.message = message;
  };

  var myFunction = function() {
    // Do something dangerous...
    throw new MyException('Unexpected error');
  };

  assertThat(myFunction, raises('MyException'));
});

test('matchers: raisesAnything', function(assert) {
  assert.expect(1);
  var myFunction = function() {
    // Do something dangerous...
    throw 'Some unexpected error';
  };

  assertThat(myFunction, raisesAnything());
});

test('matchers: sameAs', function(assert) {
  assert.expect(1);
  var num = 10, anotherNumber = num;
  assertThat(num, sameAs(anotherNumber));
});

test('matchers: truth', function(assert) {
  assert.expect(6);
  var undef;
  assertThat(10, truth());
  assertThat({}, truth());
  assertThat(0, not(truth()));
  assertThat('', not(truth()));
  assertThat(null, not(truth()));
  assertThat(undef, not(truth()));
});

test('matchers: equivalentMap', function(assert) {
  assert.expect(1);
  var firstMap = {"key" : 1, "key2" : "String"};
  var equivMap = {"key" : 1, "key2" : "String"};

  assertThat(firstMap, equivalentMap(equivMap));
});

test('matchers: equivalentArray', function(assert) {
  assert.expect(1);
  var firstArray = [ 1, "String"];
  var equivArray = [ 1, "String"];

  assertThat(firstArray, equivalentArray(equivArray));
});

test('matchers: between', function(assert) {
  assert.expect(1);
  assertThat(5, between(4).and(7));
});

test('matchers: closeTo', function(assert) {
  assert.expect(4);
  assertThat(0.5, closeTo(1.0, 0.5));
  assertThat(1.0, closeTo(1.0, 0.5));
  assertThat(1.5, closeTo(1.0, 0.5));
  assertThat(2.0, not(closeTo(1.0, 0.5)));
});

test('matchers: divisibleBy', function(assert) {
  assert.expect(1);
  assertThat(21, divisibleBy(3));
});

test('matchers: even', function(assert) {
  assert.expect(1);
  assertThat(4, even());
});

test('matchers: greaterThan', function(assert) {
  assert.expect(1);
  assertThat(10, greaterThan(5));
});

test('matchers: greaterThanOrEqualTo', function(assert) {
  assert.expect(1);
  assertThat(10, greaterThanOrEqualTo(5));
});

test('matchers: lessThan', function(assert) {
  assert.expect(1);
  assertThat(5, lessThan(10));
});

test('matchers: lessThanOrEqualTo', function(assert) {
  assert.expect(1);
  assertThat(5, lessThanOrEqualTo(10));
});

test('matchers: notANumber', function(assert) {
  assert.expect(1);
  assertThat(Math.sqrt(-1), notANumber());
});

test('matchers: odd', function(assert) {
  assert.expect(1);
  assertThat(5, odd());
});

test('matchers: zero', function(assert) {
  assert.expect(2);
  assertThat(0, zero());
  assertThat('0', not(zero()));
});

test('matchers: bool', function(assert) {
  assert.expect(3);
  assertThat(true, bool());
  assertThat(false, bool());
  assertThat("text", not(bool()));
});

test('matchers: func', function(assert) {
  assert.expect(2);
  assertThat(function() {}, func());
  assertThat("text", not(func()));
});

test('matchers: hasFunction', function(assert) {
  assert.expect(1);

  var greeter = {
    sayHello: function(/*name*/) {
      //alert('Hello, ' + name);
    }
  };

  assertThat(greeter, hasFunction('sayHello'));
});

test('matchers: hasMember', function(assert) {
  assert.expect(3);

  var greeter = {
    marco: 'polo',
    sayHello: function(/*name*/) {
      //alert('Hello, ' + name);
    }
  };

  assertThat(greeter, hasMember('marco'));
  assertThat(greeter, hasMember('sayHello'));

  assertThat(greeter, hasMember('marco', equalTo('polo')));
});

test('matchers: instanceOf', function(assert) {
  assert.expect(1);
  assertThat([], instanceOf(Array));
});

test('matchers: number', function(assert) {
  assert.expect(2);
  assertThat(10, number());
  assertThat('10', not(number()));
});

test('matchers: object', function(assert) {
  assert.expect(2);
  assertThat({}, object());
  assertThat(10, not(object()));
});

test('matchers: string', function(assert) {
  assert.expect(2);
  assertThat('10', string());
  assertThat(10, not(string()));
});

test('matchers: typeOf', function(assert) {
  assert.expect(4);
  assertThat(10, typeOf('number'));
  assertThat({}, typeOf('object'));
  assertThat('10', typeOf('string'));
  assertThat(function(){}, typeOf('function'));
});

test('matchers: containsString', function(assert) {
  assert.expect(1);
  assertThat('string', containsString('tri'));
});

test('matchers: emailAddress', function(assert) {
  assert.expect(1);
  assertThat('user@domain.com', emailAddress());
});

test('matchers: endsWith', function(assert) {
  assert.expect(1);
  assertThat('string', endsWith('ring'));
});

test('matchers: equalIgnoringCase', function(assert) {
  assert.expect(1);
  assertThat('str', equalIgnoringCase('Str'));
});

test('matchers: matches', function(assert) {
  assert.expect(1);
  assertThat('0xa4f2c', matches(/\b0[xX][0-9a-fA-F]+\b/));
});

test('matchers: startsWith', function(assert) {
  assert.expect(1);
  assertThat('string', startsWith('str'));
});
