import './test.scss'
import ToggleTrip from '../components/toggle button/toggle-trip'
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Popper from '@mui/material/Popper';


const SearchFlight = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickdepart = (event) => {
       
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleClickreturn = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id ='simple-popper'// open? 'simple-popper' : undefined;

    return (
        <div className="searchengBg">
            <div className="innerwrapSE">
                <h1><i className="fl_hp_icon"></i>Far Away</h1>

                <div className="onewaycolm">
                    {/* <ul>
                        <li
                            className="activecl trip_type flig-show click-one"
                            onClick="setType'O';"
                        >
                            One-Way
                        </li>
                        <li className="trip_type flig-show" onClick="setType'R';">
                            Round-Trip
                        </li>
                    </ul> */}
                    <ToggleTrip />
                </div>
                <div className="flig-show1">
                    <div className="nwsearch_wrap">
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
                        <div className="fss_flex arrcity_colm sechver">
                            <div
                                className="innerspcr"
                                onClick={() => null}
                            >
                                <p
                                    className="srlabel"
                                    onClick={() => null}
                                >
                                    To
                                </p>
                                <input
                                    type="text"
                                    className="autoFlll cityinput"
                                    onChange={() => null}
                                    onBlur={() => null}
                                    onKeyDown={() => null}
                                    onClick={() => null}
                                    readOnly=""
                                />
                                <p

                                    className="airptname tellipsis"
                                    onClick={() => null}
                                >
                                    Arrival Airport here
                                </p>
                            </div>
                        </div>
                        <div className="fss_flex depdate_colm sechver deplbl">
                            <div
                                className="innerspcr"

                                onClick={handleClickdepart}
                            >
                                <p className="srlabel">DEPARTURE DATE</p>
                                <input
                                    name=""
                                    type="text"
                                    hidden
                                    placeholder="Departure"

                                />
                                <Popper id={id} open={open} anchorEl={anchorEl}><Calendar /></Popper>


                                <p>
                                    <span className="ftn25 mgr5">29</span
                                    ><span className="ftn13">Aug'2022</span
                                    >
                                    {/* <img className="cl_icon" src="/Content/img/calender_icon.svg" /> */}
                                </p>
                                <p className="airptname" >Monday</p>
                            </div>
                            <div  ></div>
                        </div>
                        <div className="fss_flex depdate_colm sechver retu-date-n"
                        onClick={handleClickreturn} >
                            <div
                                className="innerspcr"

                                
                            >
                                <p className="srlabel">Return Date</p>
                                <input
                                    name=""
                                    type="text"
                                    className="input_cld hide-ddate round-but1"
                                    hidden
                                    placeholder="Return"
                                />
                                <p className="rou_noti" >
                                    save more on round trip<br />
                                </p>
                                <p>
                                    <span className="ftn25 mgr5" ></span
                                    ><span className="ftn13"></span
                                    >
                                    <Popper id={id} open={open} anchorEl={anchorEl}><Calendar onClickDay={(e)=>console.log(e)} /></Popper>
                                    {/* <img className="cl_icon" src="/Content/img/calender_icon.svg" /> */}
                                </p>
                                <p className="airptname" ></p>
                                <input type="hidden" name="hdn1" />
                                <input type="hidden" />
                            </div>
                            <i className="roundcross rt_cross" ></i>
                        </div>
                        <div className="fss_flex trvlr_colm sechver">
                            <div className="innerspcr" onClick={() => null}>
                                <p className="srlabel">TRAVELLER &amp; class</p>
                                <p >
                                    <span id="spnDrpNo" className="ftn25 mgr5 drpNoTrv">1</span>
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