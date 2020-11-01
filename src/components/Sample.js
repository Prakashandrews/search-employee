import React from 'react';
import SecondComponent from './SecondComponent';

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
const Sample = () => {
    return(
        <>
        <NewComponent/>
        <SecondComponent {...props}/>
        </>
    )
}
export default Sample;