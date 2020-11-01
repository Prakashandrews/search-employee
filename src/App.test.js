import React from 'react';
import App from './App';
import { mount, shallow, render } from 'enzyme';
import Enzyme from 'enzyme';
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('renders learn react link', () => {
  it('renders learn react link', () => {
    const component = shallow(<App />);
   
  });
});