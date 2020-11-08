import * as utility from './utility'
jest.mock('./utility');

describe("Test Utilities", ()=> {
    it("Test addition method", ()=> {
        const addStub = jest.spyOn(utility, 'addition');
    });
})