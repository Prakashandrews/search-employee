//import { mount, shallow, render } from 'enzyme';
import SecondComponent from './SecondComponent';
import React from 'react';
//const Enzyme = require('enzyme');
// import Enzyme from 'enzyme';
// const EnzymeAdapter = require('enzyme-adapter-react-16');

// // Setup enzyme's react adapter
// Enzyme.configure({ adapter: new EnzymeAdapter() });
import { render, fireEvent } from '@testing-library/react';

describe("Testing Second Component", () => {
  it("Render COmponent", () => {
    const props = {
      firstName: 'PRAKASH',
      lastName: 'MS',
      type: 'name'
    }
    const submit = jest.fn();

    const {queryByTestId} = render(<SecondComponent {...props} onClick={submit}/>);
    expect(queryByTestId("submit-button")).toBeTruthy();     
    fireEvent.click(queryByTestId('submit-button'));
    expect(submit).not.toHaveBeenCalled();
  });

})
