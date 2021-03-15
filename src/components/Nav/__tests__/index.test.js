import react from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '../';

afterEach(cleanup);

describe('Nav component', () => {
	it('renders', () => {
		render(<Nav />);
	});

	it('matches snapshot DOM node structure', () => {
		// render About
		const { asFragment } = render(<Nav />);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe('emoji is visible', () => {
	it('inserts emoji into the h2', () => {
		// arrange
		const { getByLabelText } = render(<Nav />);
		// assert
		expect(getByLabelText('camera')).toHaveTextContent('📸');
	});
});

describe('links are visible', () => {
	it('inserts text into the links', () => {
		// arrange
		const { getByTestId } = render(<Nav />);
		// assert
		expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
		expect(getByTestId('about')).toHaveTextContent('About Me');
	});
});