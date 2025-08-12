import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

class MockIntersectionObserver {
  constructor(public callback: IntersectionObserverCallback) {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
}
// @ts-ignore
global.IntersectionObserver = MockIntersectionObserver as any;

// Mock next/dynamic to return a noop React component
jest.mock('next/dynamic', () => {
  const React = require('react');
  return (loader: any, _opts?: any) => {
    return function DynamicStub() {
      return React.createElement(React.Fragment, null);
    };
  };
});