import React from 'react'

const FlightSearchInput = () => {
    return (
        <div className="fss_flex depcity_colm sechver">
            <div
                className="innerspcr"
                onClick={() => null}
            >
                <p className="srlabel">From</p>

                <input
                    onKeyDown={() => null}
                    type="text"
                    onChange={() => null}
                    onBlur={() => null}
                    className="autoFlll cityinput"
                    placeholder="From"
                    onClick={() => null}
                    readOnly=""
                />
                <p
                    className="airptname tellipsis"
                    onClick={() => null}
                >
                    Departure Airport name here
                </p>
            </div>
        </div>
    )
}

export default FlightSearchInput