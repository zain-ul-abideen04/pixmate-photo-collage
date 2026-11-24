import React from "react";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "../../components/wrapper";
import ProfileTab from "../../components/profileTab";
import { doctorData } from "../../data/data";

export default function DrProfile(props){
    let id = props.params.id
    let data = doctorData.find((doctor)=>doctor.id === parseInt(id))
    return(
        <Wrapper>
             <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Doctor Profile & Settings</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                <li className="breadcrumb-item"><Link href="/doctors">Doctor</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Profile</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="card rounded shadow overflow-hidden mt-4 border-0">
                        <div className="p-5 bg-primary bg-gradient"></div>
                        <div className="avatar-profile d-flex margin-nagative mt-n5 position-relative ps-3">
                            <Image src={data?.image} width={110} height={110} className="rounded-circle shadow-md avatar avatar-medium" alt=""/>
                            <div className="mt-4 ms-3 pt-3">
                                <h5 className="mt-3 mb-1">{data?.name}</h5>
                                <p className="text-muted mb-0">{data.title}</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <ProfileTab/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}