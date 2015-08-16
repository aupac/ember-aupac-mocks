# Ember-aupac-mocks

[![NPM package](https://img.shields.io/npm/v/ember-aupac-mocks.svg)](https://www.npmjs.com/package/ember-aupac-mocks) [![Build Status](https://img.shields.io/travis/aupac/ember-aupac-mocks.svg)](https://travis-ci.org/aupac/ember-aupac-mocks) [![Ember Observer Score](http://emberobserver.com/badges/ember-aupac-mocks.svg)](http://emberobserver.com/addons/ember-aupac-mocks)

Javascript Mocking and Matching Library for unit testing ember-cli applications.

## Requirements 

`ember-cli >= 1.13.x`

## Installing
```bash
COMING SOON!
```

## Usage

Import the Mocks and Matchers into your ember test.

```javascript
import { Mocks, Matchers } from 'ember-aupac-mocks';

//Use object deconstruction to pull out the features you want to use
const { mock, mockFunction, verify, when, ...more} = Mocks;
const { empty, emailAddress, greaterThan, everyItem, hasSize, even, lessThan, either, ...more} = Matchers;

//Start mocking and matching in your tests
test('mocking and matching', function(assert) {

  const myMock = mock(Ember.Object);
  when(myMock).get('name').thenReturn('hello world');
  assert.equal('hello world', myMock.get('name'), 'should be the same');
  verify(myMock).get('name');

  assertThat('', empty());
  assertThat('user@domain.com', emailAddress());
  assertThat(10, either(greaterThan(50)).or(even()));
  assertThat([1,2,3], everyItem(greaterThan(0)));
  assertThat([1,2,3], hasSize(lessThan(5)));
});
```

## Features

### Rich and readable matching api - [docs](http://danielmartins.ninja/jshamcrest/modules/matchers.html)
```javascript
assertThat('', empty());
assertThat('user@domain.com', emailAddress());
assertThat(10, either(greaterThan(50)).or(even()));
assertThat([1,2,3], everyItem(greaterThan(0)));
assertThat([1,2,3], hasSize(lessThan(5)));
```

### Mock any object - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.mock)
```javascript
var modelMock = mock(DS.Model);
var controllerMock = mock(Ember.Controller);
```

### Setup expectations on your mocks - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.when)
```javascript
var employeeMock = mock(DS.Model);
when(employeeMock).get('name').thenReturn('jack');
equal('jack',employeeMock.get('name'));
```

### Verify function execution - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.verify)
```javascript
var employeeMock = mock(DS.Model);
employeeMock.get('name');
verify(employeeMock).get("name");
```

### Mock functions - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.mockFunction)
```javascript
var mockedFunc = mockFunction();
```

### Verify function execution - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.verify)
```javascript
var mockedFunc = mockFunction();
mockedFunc('hello world');
verify(mockedFunc)('hello world');
```

* Visit [JsMockito](http://jsmockito.org/api/1.0.4/) for more information about mocking.
* Visit [JsHamcrest](http://danielmartins.ninja/jshamcrest) for more information about the matching.

## Mocks - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html)

```javascript
const {
  mock,
  when,
  verify,
  mockFunction,
  spy,
  verifyZeroInteractions,
  verifyNoMoreInteractions,
  isMock,
  never,
  zeroInteractions,
  noMoreInteractions,
  times,
  once
  } = Mocks;
```

## Matchers - [docs](http://danielmartins.ninja/jshamcrest/modules/matchers.html)

```javascript
const {
  assertThat,
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
  startsWith,
  filter,
  callTo
  } = Matchers;
```

-------------------------------

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
