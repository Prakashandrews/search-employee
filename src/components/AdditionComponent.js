import React, { useState } from 'react';
import { addition, subtraction } from './utility';
import { Button } from 'react-bootstrap';

const AdditionComponent = (props) => {
    const { a, b, type } = props;
    const [action, setType] = useState(type);

    const add = action === 'ADD' && addition(a, b);
    const sub = action === 'SUB' && subtraction(a, b);

    const submit =()=> {
        setType('SUB')
    }

    return (
        <>
            {'TESTING'}
            <div>
                {action === 'ADD' && add}
                {action === 'SUB' && sub}
                <div>
                    <Button data-id="submit-button" data-testid="submit-button" onClick={submit}>Submit</Button>
                </div>
            </div>
        </>)
}
export default AdditionComponent;
