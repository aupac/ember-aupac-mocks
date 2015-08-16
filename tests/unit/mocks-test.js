import Ember from 'ember';
import { module, test } from 'qunit';
import { Mocks, Verifiers } from 'ember-aupac-mocks';

module('Unit: Mocks');

const {
  when,
  verify,
  mockFunction,
  spy,
  verifyZeroInteractions,
  verifyNoMoreInteractions,
  isMock
  } = Mocks;

const {
  never,
  zeroInteractions,
  noMoreInteractions,
  times,
  once
  } = Verifiers;

test('Mocks: mock', function(assert) {
  assert.expect(1);
  const mock = Mocks.mock(Ember.Object);
  assert.ok(isMock(mock));
});

test('Mocks: when', function(assert) {
  assert.expect(1);
  const mock = Mocks.mock(Ember.Object);
  when(mock).get('name').thenReturn('test');
  assert.equal('test', mock.get('name') , 'should be able to setup expectations of your mocks');
});

test('Mocks: verify', function(assert) {
  assert.expect(0);
  const mock = Mocks.mock(Ember.Object);
  mock.get('name');
  verify(mock).get('name');
});

test('Mocks: mockFunction', function(assert) {
  assert.expect(0);
  const fnMock = mockFunction();
  fnMock('hello world');
  verify(fnMock)('hello world');
});

test('Mocks: spy', function(assert) {
  assert.expect(0);
  const realObject = {
    name() {
      return 'test';
    }
  };
  const realObjectSpy = spy(realObject);
  realObjectSpy.name();
  realObjectSpy.name();
  verify(realObjectSpy, times(2)).name();
});

test('Mocks: verifyZeroInteractions', function(assert) {
  assert.expect(0);
  const mock = Mocks.mock(Ember.Object);
  verifyZeroInteractions(mock);
});

test('Mocks: verifyNoMoreInteractions', function(assert) {
  assert.expect(0);
  const mock = Mocks.mock(Ember.Object);
  verifyNoMoreInteractions(mock);
});

test('Mocks: isMock', function(assert) {
  assert.expect(1);
  const mock = Mocks.mock(Ember.Object);
  assert.ok(isMock(mock));
});

test('Mocks: never', function(assert) {
  assert.expect(0);
  const mock = Mocks.mock(Ember.Object);
  mock.set('name', 'bob');
  verify(mock, never()).get('name');
});

test('Mocks: zeroInteractions', function(assert) {
  assert.expect(0);
  const mock = Mocks.mock(Ember.Object);
  verify(mock, zeroInteractions());
});

test('Mocks: noMoreInteractions', function(assert) {
  assert.expect(0);
  const mock = Mocks.mock(Ember.Object);
  when(mock).get('name').thenReturn('jack');
  mock.get('name');
  verify(mock).get('name'); //satisfy noMoreInteractions()
  verify(mock, noMoreInteractions());
});

test('Mocks: times', function(assert) {
  assert.expect(0);
  const mock = Mocks.mock(Ember.Object);
  mock.set('name', 'joe');
  mock.set('name', 'bob');
  verify(mock, times(2)).set();
});

test('Mocks: once', function(assert) {
  assert.expect(0);
  const mock = Mocks.mock(Ember.Object);
  mock.set('name', 'joe');
  verify(mock, once()).set();
});
