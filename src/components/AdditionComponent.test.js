import React from 'react';
import AdditionComponent from './AdditionComponent';
import {render, fireEvent} from '@testing-library/react';
import Enzyme from 'enzyme';
const EnzymeAdapter = require('enzyme-adapter-react-16');
import {shallow} from 'enzyme';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Addition", ()=> {
    let props = {};
    beforeAll(() => {
        props = {
            a:6,
            b:2,
            type: 'ADD'
        };
    });

    it("Test render method", ()=> {
        const { getByTestId } = render(<AdditionComponent props={props}/>);
        fireEvent.click(getByTestId('submit-button'));
    });
});

describe("Subtraction", ()=> {
    let props = {};
    beforeAll(() => {
        props = {
            a:1,
            b:0,
            type: 'SUB'
        };
    });

    it("Sub render method", ()=> {
        const { getByTestId } = render(<AdditionComponent props={props}/>);
       
    });
})