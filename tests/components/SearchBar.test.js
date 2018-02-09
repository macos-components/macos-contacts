import React, { Component } from 'react';
import SearchBar from 'components/SearchBar';
import renderer from 'react-test-renderer';

test('Renders => components/SearchBar', () => {
  const component = renderer.create(
    <SearchBar />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
