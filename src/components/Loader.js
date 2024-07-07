import React from 'react'

export default function Loader() {
    return (
        <div className='position-fixed d-flex justify-content-center bg-white top-0 right-0'
            style={{
                width: "100vw",
                height: '100vh',
                alignItems: "center" //vertically centered
            }}>
            <div className="spinner-grow text-primary" role="status" style={{ animationTimingFunction: "ease-out" }}></div>
            <div className="spinner-grow mx-2 text-secondary" style={{ animationDelay: "0.25s", animationTimingFunction: "ease-out" }} role="status"></div>
            <div className="spinner-grow text-success" style={{ animationDelay: "0.5s", animationTimingFunction: "ease-out" }} role="status"></div>
        </div >
    )
}

