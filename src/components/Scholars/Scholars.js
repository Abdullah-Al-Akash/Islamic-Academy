import React, { useEffect, useState } from 'react';
import SingleScholar from '../SingleScholar/SingleScholar';
import './Scholars.css';

const Scholars = () => {
        // Declare useState:
        const [scholars, setScholars] = useState([]);
        // Load Data:
        useEffect(() => {
                fetch('./scholars.JSON')
                        .then(res => res.json())
                        .then(data => setScholars(data))
        }, [])
        return (
                <div className="scholars">
                        <div className="container">
                                <h2 className="text-center text-white pt-5">We Organized our Islamic Academy by <br /> <span className="text-warning"></span> </h2>
                                <h3 className="text-center text-warning mt-2">World Classes Scholars</h3>
                                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                                        {/* Map Data */}
                                        {
                                                scholars.length === 0 ? <img className="img-fluid w-25 rounded-3 mx-auto" src="https://trails.ca/wp-content/uploads/2020/10/loading-spinner.gif" alt="" />
                                                        :
                                                        scholars.map(scholar => <SingleScholar
                                                                key={scholar.id}
                                                                scholar={scholar}
                                                        >
                                                        </SingleScholar>)
                                        }
                                </div>
                        </div>
                </div>
        );
};

export default Scholars;