import React from 'react'

function Skeleton() {
    return (
        <div className='col-md-4 mb-2'>
            <div className="card" aria-hidden="true">
                <svg className="bd-placeholder-img placeholder-glow card-img-top" style={{ width: "100%" }} height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" style={{ width: "100%" }} height="100%" fill="#868e96"></rect>
                </svg>

                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                    <a href="/" tabIndex="-1" className="btn btn-primary disabled placeholder col-3">. &nbsp;.&nbsp;   .</a>
                </div>
            </div>
        </div>
    )
}

export default Skeleton