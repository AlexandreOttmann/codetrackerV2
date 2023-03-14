import Home from '../pages/Home';
import { test, expect } from 'vitest';

test('Home component should display Bienvenue', () => {
  const home = Home();
  expect(home).toHaveProperty('props');
  expect(home.props).toHaveProperty('children');
  expect(home.props.children).toHaveProperty('props');
  expect(home.props.children.props).toHaveProperty('children');
  expect(home.props.children.props.children).toBe('Bienvenue');
});
