import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ContactForm from '../';

afterEach(cleanup);

describe('Contact component', () => {
	it('renders', () => {
		render(<ContactForm />);
	})

	it('Matches snapshot DOM node structure', () => {
		const { asFragment } = render(
			<ContactForm />
		);

		expect(asFragment()).toMatchSnapshot();
	});

	it('has an H1 with text', () => {
		const { getByTestId } = render(
			<ContactForm />
		);

		expect(getByTestId('contact-header')).toHaveTextContent('Contact me');
	})

	it('has a submit button', () => {
		const { getByTestId } = render(
			<ContactForm />
		);

		expect(getByTestId('submit')).toHaveTextContent('Submit');
	})
});