import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PhotoList from '../';

afterEach(cleanup);

const currentCategory = 'portraits';

describe('photolist is rendering', () => {
	it('renders', () => {
		render(
			<PhotoList
				currentCategory={currentCategory}
			/>
		);
	});

	it('matches snapshot', () => {
    const { asFragment } = render(
			<PhotoList
				currentCategory={currentCategory}
			/>
		);
    expect(asFragment()).toMatchSnapshot();
  });
});