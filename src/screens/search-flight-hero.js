
import ToggleTrip from '../components/flight-search-components/toggle-trip'
import Calendar from 'react-calendar';
import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Popper from '@mui/material/Popper';
import FlightSearchInput from '../components/flight-search-components/flight-search-input';
import DepartureDate from '../components/flight-search-components/flight-date'
import ReturnDate from '../components/flight-search-components/flight-date'
import { setDepartureDate, setReturnDate } from '../context/trip/tripSlice';
import { useSelector } from 'react-redux';
import { selectTrip } from '../context/trip/tripSlice';
import { date_objToString } from '../context/trip/tripSlice';
import { selectAirports } from '../context/locations/airports/airportsSlice'



const SearchFlight = () => {

    const airports = useSelector(selectAirports)
    const { departureDate } = useSelector(selectTrip)

    const startDate = new Date(date_objToString(departureDate))




    return (
        <div className="searchengBg">
            <div className="innerwrapSE">
                <h1><i className="fl_hp_icon"></i>Far Away</h1>

                <div className="onewaycolm">
                    <ToggleTrip />
                </div>
                <div className="flig-show1">
                    <div className="nwsearch_wrap">
                        <FlightSearchInput
                            items={airports}
                            title='from'
                            bind=''
                        />

                        <FlightSearchInput
                            title='to'
                            bind=''
                        />

                        <DepartureDate
                            items={airports}
                            title='departure date'
                            bind={setDepartureDate}
                        />
                        <ReturnDate
                            items={airports}
                            title='Return date'
                            bind={setReturnDate}
                            startDate={startDate}
                        />


                        <div className="fss_flex trvlr_colm sechver">
                            <div className="innerspcr" onClick={() => null}>
                                <p className="srlabel">TRAVELLER &amp; class</p>
                                <p >
                                    <span id="spnDrpNo" className="ftn25 mgr5 drpNoTrv">
                                        1
                                        </span>
                                    <span className="ftn14" id="spnTraveller">Travellers</span>
                                    <i id="iDownArr" className="downArwSe"></i>
                                </p>
                                <p id="pcalss" className="airptname optclassName-name">class here</p>
                            </div>

                        </div>
                        <div className="fss_flex search_colm">
                            <button
                                name=""
                                className="srchBtnSe"
                                type="button"
                                onClick={() => null}
                            >
                                <span className="button-helper"></span> Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default SearchFlight