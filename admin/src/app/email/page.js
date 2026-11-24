'use clinet'
import React from "react"
import Link from "next/link"
import Wrapper from "../components/wrapper"
import MailTab from "../components/mailTab"

export default function Email(){
    return(
        <Wrapper>
             <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Email</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Email</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="card rounded border-0 mt-4 overflow-hidden">
                        <MailTab/>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}