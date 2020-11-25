import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const inputRef = React.useRef()
    let history = useHistory();
    const handleSearch = () => {
        const val = inputRef.current.value.toLowerCase();
        if (val !== '') {
            history.push(`Overview/${val}`);
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center flex-column">
                    <div>Employee Explorer</div>
                    <div className="row justify-content-center flex-row p-3">
                        <div> <input className="form-control" ref={inputRef} type="text" placeholder="Search.." /></div>
                        <div className="ml-1"><button type="button" className="btn btn-primary" onClick={handleSearch}>Search</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;