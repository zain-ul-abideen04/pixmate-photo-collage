import React from "react";
import Link from "next/link";
import Wrapper from "../components/wrapper";
import CalendarFull from "../components/calenderFull";

export default function Calendar(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Calendar</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Calendar</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row">
                        <div className="col-xl-2 col-lg-4 col-12 mt-4">
                            <div id="external-events">
                                <div className="card border-0 p-4 shadow rounded">
                                    <span className="h6">All Events</span>
                                
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                        <div className="fc-event-main">Metting</div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                        <div className="fc-event-main">Operations</div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                        <div className="fc-event-main">Lunch</div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                        <div className="fc-event-main">Conference</div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                        <div className="fc-event-main">Business Metting</div>
                                    </div>
                                
                                    <div className="mt-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="drop-remove"/>
                                            <label className="form-check-label" htmlFor="drop-remove">Remove after drop</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-10 col-lg-8 col-12 mt-4">
                            <CalendarFull/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}