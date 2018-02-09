import React from 'react';
import PrimaryLink from 'components/PrimaryLink';
import renderer from 'react-test-renderer';

test('Renders => components/PrimaryLink', () => {
  const component = renderer.create(
    <PrimaryLink />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
