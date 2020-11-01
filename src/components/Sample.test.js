import React from 'react';
import Sample from './Sample';
import {render, container} from '@testing-library/react';
import Enzyme from 'enzyme';
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('./SecondComponent', ()=> ()=> <div>MOCK COMPONENT</div>)
describe("render Sample Component", ()=> {

    it("Test render method", ()=> {
        const {container} = render(<Sample/>);
        //console.log(container.innerHTML);

    });
})