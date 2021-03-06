import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Form />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.render();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});