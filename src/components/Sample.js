import React from 'react';
import SecondComponent from './SecondComponent';
import AdditionComponent from './AdditionComponent';

const Hello = ({name}) => <h1> Hello {name} !</h1>;
function withName(TestComponent) {
    return class extends React.Component {
        render() {
            return <TestComponent name="World"/>
        }
    }
}

const NewComponent = withName(Hello);

const props = {
    firstName: 'PRAKASH',
    lastName: 'MS',
    type: 'name'
}
const add = {
    a:1,
    b:2,
    type: 'ADD'
};
const Sample = () => {
    return(
        <>
        <NewComponent/>
        <SecondComponent {...props}/>
        <AdditionComponent {...add}/>
        </>
    )
}
export default Sample;