
'use strict';

import React from 'react';
import Header from '../src/components/header/Header';
import renderer from 'react-test-renderer';

it('header renders correctly', () => {
  const header = renderer.create(
    <Header />
  ).toJSON();
  expect(header).toMatchSnapshot();
});
