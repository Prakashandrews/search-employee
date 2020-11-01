import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const SecondComponent = ({ firstName, lastName, type }) => {
  const [ age, setAge ] = useState(1);
  const submit = () => {
    setAge(29);
   
  }

  return (
    <>
      <div>First Name : {firstName}</div>
      <div>Last Name: {lastName}</div>
      { type === 'name' && <div>TYPE: {type}</div>}
      { age === 29 && <div id="age" className="age">AGE: {age}</div>}
      <Button data-id="submit-button" data-testid="submit-button" onClick={submit}>Submit</Button>
    </>
  )
}

export default SecondComponent