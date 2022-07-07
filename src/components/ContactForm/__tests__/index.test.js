import React, {useState} from "react";
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import ContactForm from "..";


describe('renders ContactForm component', () => {
    const {getByTestId} = render(<ContactForm/>)
    it('renders', () => {
        render(<ContactForm></ContactForm>)
    })

    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    
})
