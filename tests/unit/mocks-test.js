import Ember from 'ember';
import { module, test } from 'qunit';
import { Mocks } from 'ember-aupac-mocks';

module('Unit: Mocks');

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

test('Mocks: mock', function(assert) {
  assert.expect(1);
  const mockObject = mock(Ember.Object);
  assert.ok(isMock(mockObject));
});

test('Mocks: when', function(assert) {
  assert.expect(1);
  const mockObject = mock(Ember.Object);
  when(mockObject).get('name').thenReturn('test');
  assert.equal('test', mockObject.get('name') , 'should be able to setup expectations of your mocks');
});

test('Mocks: verify', function(assert) {
  assert.expect(0);
  const mockObject = mock(Ember.Object);
  mockObject.get('name');
  verify(mockObject).get('name');
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
  const mockObject = mock(Ember.Object);
  verifyZeroInteractions(mockObject);
});

test('Mocks: verifyNoMoreInteractions', function(assert) {
  assert.expect(0);
  const mockObject = mock(Ember.Object);
  verifyNoMoreInteractions(mockObject);
});

test('Mocks: isMock', function(assert) {
  assert.expect(1);
  const mockObject = mock(Ember.Object);
  assert.ok(isMock(mockObject));
});

test('Mocks: never', function(assert) {
  assert.expect(0);
  const mockObject = mock(Ember.Object);
  mockObject.set('name', 'bob');
  verify(mockObject, never()).get('name');
});

test('Mocks: zeroInteractions', function(assert) {
  assert.expect(0);
  const mockObject = mock(Ember.Object);
  verify(mockObject, zeroInteractions());
});

test('Mocks: noMoreInteractions', function(assert) {
  assert.expect(0);
  const mockObject = mock(Ember.Object);
  when(mockObject).get('name').thenReturn('jack');
  mockObject.get('name');
  verify(mockObject).get('name'); //satisfy noMoreInteractions()
  verify(mockObject, noMoreInteractions());
});

test('Mocks: times', function(assert) {
  assert.expect(0);
  const mockObject = mock(Ember.Object);
  mockObject.set('name', 'joe');
  mockObject.set('name', 'bob');
  verify(mockObject, times(2)).set();
});

test('Mocks: once', function(assert) {
  assert.expect(0);
  const mockObject = mock(Ember.Object);
  mockObject.set('name', 'joe');
  verify(mockObject, once()).set();
});
