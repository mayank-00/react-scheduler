import React from 'react'

import "./index.css";

import SlotsGenerator from './components/slotsGenerator'

const LandingPage = () => {

    return <>
        <div className="p-50 mw-500 m-auto">
            <span className="display-inline-block mb-20 font-size-16 fw-500">Pick up a slot</span>
            <SlotsGenerator />
        </div>
    </>
}

export default LandingPage