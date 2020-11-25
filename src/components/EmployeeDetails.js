import React, { useEffect, useState } from 'react';
import { getAllEmployees } from './api';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
    const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(true);
    let { name } = useParams();

    useEffect(() => {
        async function fetchData(name) {
            const res = await getAllEmployees(name);
            setEmployee(res);
            setLoading(false);
        }
        fetchData(name);
    }, [name]);
    return (
        <>
            <div className="container">
                <div className="row justify-content-center flex-column">
                    <div>Employee Overview</div>
                    {loading && <div>Retriving.....</div>}
                    {!loading && <div className="card">
                        <div className="card-body text-primary">
                            {employee && employee[0] && <div>Position: {employee[0]}</div>}
                            {employee && employee[1] && <div>Subordinates of employee : {employee[1]["direct-subordinates"].map(item => <div key={item}>{item}</div>)}</div>}
                            {employee && !employee[1] && <div>No Subordinates!!</div>}
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}
export default EmployeeDetails;